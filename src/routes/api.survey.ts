import { createFileRoute } from '@tanstack/react-router'
import { count, desc, isNotNull, ne, and } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '../../db/index.js'
import { surveyResponses } from '../../db/schema.js'
import { SURVEY, type SurveyStats } from '@/data/survey'

const answersShape = Object.fromEntries(
  SURVEY.map((q) => [q.id, z.enum(q.options.map((o) => o.id) as [string, ...string[]])]),
)

const input = z.object({
  answers: z.object(answersShape).strict(),
  feedback: z.string().trim().max(1000).optional(),
  language: z.enum(['en', 'ru', 'kk']).optional(),
})

async function stats(): Promise<SurveyStats> {
  const rows = await db.select({ answers: surveyResponses.answers }).from(surveyResponses)
  const counts: SurveyStats['counts'] = {}
  for (const q of SURVEY) counts[q.id] = Object.fromEntries(q.options.map((o) => [o.id, 0]))
  for (const row of rows) {
    for (const q of SURVEY) {
      const a = row.answers?.[q.id]
      if (a && a in counts[q.id]) counts[q.id][a] += 1
    }
  }
  const [{ value: comments }] = await db
    .select({ value: count() })
    .from(surveyResponses)
    .where(and(isNotNull(surveyResponses.feedback), ne(surveyResponses.feedback, '')))
  const [latest] = await db
    .select({ createdAt: surveyResponses.createdAt })
    .from(surveyResponses)
    .orderBy(desc(surveyResponses.createdAt))
    .limit(1)
  return { total: rows.length, comments, latest: latest ? latest.createdAt.toISOString() : null, counts }
}

export const Route = createFileRoute('/api/survey')({
  server: {
    handlers: {
      GET: async () => {
        try {
          return Response.json(await stats(), { headers: { 'Cache-Control': 'no-store' } })
        } catch (err) {
          console.error('survey stats failed', err)
          return Response.json({ error: 'Could not load results' }, { status: 500 })
        }
      },
      POST: async ({ request }) => {
        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }
        const parsed = input.safeParse(body)
        if (!parsed.success) {
          return Response.json({ error: 'Please answer all questions with valid options.' }, { status: 400 })
        }
        try {
          const { answers, feedback, language } = parsed.data
          await db.insert(surveyResponses).values({
            answers: answers as Record<string, string>,
            feedback: feedback ? feedback : null,
            language: language ?? null,
          })
          return Response.json(await stats(), { status: 201 })
        } catch (err) {
          console.error('survey insert failed', err)
          return Response.json({ error: 'Could not save your response' }, { status: 500 })
        }
      },
    },
  },
})
