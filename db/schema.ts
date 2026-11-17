import { pgTable, serial, text, timestamp, jsonb, varchar } from 'drizzle-orm/pg-core'

export const surveyResponses = pgTable('survey_responses', {
  id: serial().primaryKey(),
  answers: jsonb().$type<Record<string, string>>().notNull(),
  feedback: text(),
  language: varchar({ length: 8 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
