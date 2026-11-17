import * as React from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Laptop,
  Leaf,
  ListChecks,
  MessageSquare,
  Presentation,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import { PageHero } from '@/components/site/page-hero'
import { useI18n } from '@/lib/i18n'
import { useLocalState } from '@/lib/storage'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/lesson')({
  head: () => ({ meta: [{ title: 'Interactive Lesson: Environmental Protection — Blended Learning' }] }),
  component: LessonPage,
})

const STEPS: { id: string; title: string; icon: LucideIcon; where: 'class' | 'online' }[] = [
  { id: 'objectives', title: 'Learning objectives', icon: Target, where: 'class' },
  { id: 'intro', title: 'Classroom introduction', icon: Presentation, where: 'class' },
  { id: 'reading', title: 'Reading passage', icon: BookOpen, where: 'class' },
  { id: 'vocab', title: 'Vocabulary exercises', icon: ListChecks, where: 'online' },
  { id: 'online', title: 'Online activity', icon: Laptop, where: 'online' },
  { id: 'questions', title: 'Interactive questions', icon: Sparkles, where: 'online' },
  { id: 'discussion', title: 'Final discussion', icon: MessageSquare, where: 'class' },
]

/* ---------- exercise data ---------- */
const MATCHING = [
  { word: 'pollution', answer: 'Harmful substances that make air, water or land dirty' },
  { word: 'recycle', answer: 'To process used materials so they can be used again' },
  { word: 'renewable', answer: 'Able to be replaced naturally, like wind or solar energy' },
  { word: 'endangered', answer: 'At risk of disappearing completely' },
  { word: 'deforestation', answer: 'Cutting down large areas of forest' },
  { word: 'sustainable', answer: 'Able to continue without harming the environment' },
]
const MATCH_OPTIONS = [...MATCHING.map((m) => m.answer)].sort()

const GAPS = [
  { before: 'The Aral Sea became much smaller because water from its rivers was used for', after: '.', answer: 'irrigation' },
  { before: 'Plastic bottles can be collected and', after: 'into new products.', answer: 'recycled' },
  { before: 'Solar and wind power are examples of', after: 'energy.', answer: 'renewable' },
  { before: 'The snow leopard is an', after: 'species that needs protection.', answer: 'endangered' },
  { before: 'Burning coal releases harmful', after: 'into the air.', answer: 'emissions' },
]
const GAP_BANK = ['emissions', 'endangered', 'irrigation', 'recycled', 'renewable']

const TRUE_FALSE = [
  { s: 'Greenhouse gases trap heat in the Earth’s atmosphere.', a: true },
  { s: 'Climate change is caused only by natural events, not by people.', a: false },
  { s: 'Burning fossil fuels releases carbon dioxide.', a: true },
  { s: 'Rising temperatures have no effect on glaciers.', a: false },
]

const MCQ = [
  {
    q: 'What is the main idea of the reading passage?',
    options: [
      'Environmental problems are impossible to solve',
      'People’s actions harm nature, but individuals and communities can help protect it',
      'Only governments can protect the environment',
      'Kazakhstan has no environmental problems',
    ],
    a: 1,
  },
  {
    q: 'What helped the northern part of the Aral Sea to partly recover?',
    options: ['A dam built to keep water in the northern part', 'Planting forests in the desert', 'Using more water for cotton fields', 'Nothing has helped'],
    a: 0,
  },
  {
    q: 'According to the text, which is an example of a small everyday action?',
    options: ['Building a power station', 'Using a reusable bottle instead of buying plastic ones', 'Moving to another country', 'Driving a car to school every day'],
    a: 1,
  },
  {
    q: 'What does the word “sustainable” mean in the text?',
    options: ['Very expensive', 'Able to continue without harming the environment', 'Happening very quickly', 'Made of plastic'],
    a: 1,
  },
]

/* ---------- page ---------- */
function LessonPage() {
  const { t } = useI18n()
  const [done, setDone] = useLocalState<string[]>('bl-lesson-done', [])
  const pct = Math.round((done.length / STEPS.length) * 100)
  const complete = done.length === STEPS.length

  const markDone = React.useCallback(
    (id: string) => {
      setDone((prev) => {
        if (prev.includes(id)) return prev
        const next = [...prev, id]
        if (next.length === STEPS.length) toast.success(t('lesson.complete'))
        return next
      })
    },
    [setDone, t],
  )

  return (
    <>
      <PageHero icon={Leaf} eyebrow="English · Grade 10 · 45 min + online" title={t('lesson.title')} subtitle={t('lesson.subtitle')} />

      <div className="mx-auto grid max-w-content gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr]">
        {/* progress sidebar */}
        <aside className="lg:order-none">
          <div className="sticky top-20 z-20 rounded-3xl border bg-card/95 p-5 shadow-sm backdrop-blur lg:top-24">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{t('lesson.progress')}</p>
              <p className="font-display text-sm text-primary">{pct}%</p>
            </div>
            <Progress value={pct} className="mt-3 h-2.5" aria-label={t('lesson.progress')} />
            <ol className="mt-4 hidden space-y-1 lg:block">
              {STEPS.map((s, i) => {
                const isDone = done.includes(s.id)
                return (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-accent">
                      {isDone ? <CheckCircle2 className="size-4.5 text-success" aria-label={t('lesson.done')} /> : <Circle className="size-4.5 text-muted-foreground" aria-hidden />}
                      <span className={cn(isDone && 'text-muted-foreground line-through decoration-success/60')}>
                        {i + 1}. {s.title}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ol>
            {complete ? (
              <div className="mt-4 rounded-2xl bg-gradient-to-br from-success/20 to-cyan/20 p-3 text-sm font-medium">
                <Trophy className="mb-1 size-5 text-warning" aria-hidden />
                {t('lesson.complete')}
              </div>
            ) : null}
            {done.length > 0 ? (
              <Button variant="ghost" size="sm" className="mt-3 w-full" onClick={() => setDone([])}>
                <RotateCcw /> {t('common.reset')}
              </Button>
            ) : null}
          </div>
        </aside>

        <div className="min-w-0 space-y-6">
          <Section step={0} done={done} onDone={markDone}>
            <p className="text-muted-foreground">By the end of this lesson, students will be able to:</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                'Understand a text about environmental problems and solutions.',
                'Use 12 new words connected with ecology.',
                'Watch a short video and identify key facts.',
                'Express and justify their opinion in a discussion.',
              ].map((o) => (
                <li key={o} className="flex gap-2.5 rounded-2xl border bg-background p-4 text-sm">
                  <Target className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden /> {o}
                </li>
              ))}
            </ul>
          </Section>

          <Section step={1} done={done} onDone={markDone}>
            <p className="text-muted-foreground">
              The teacher starts the lesson face-to-face. Students look at the picture and answer warm-up questions in pairs, then share with
              the class.
            </p>
            <img
              src="/.netlify/images?url=/img/lesson-environment.png&w=1000&fm=webp"
              alt="Illustration of planet Earth with forests, wind turbines and solar panels, and students planting trees"
              width={1000}
              height={562}
              loading="lazy"
              className="mt-5 aspect-video w-full rounded-2xl border object-cover"
            />
            <ul className="mt-5 space-y-2">
              {[
                'What environmental problems do you know in your city or region?',
                'What do you do at home to protect nature?',
                'Who is responsible for protecting the environment — governments, companies or every person?',
              ].map((q, i) => (
                <li key={q} className="flex gap-3 rounded-xl bg-accent/60 p-3 text-sm">
                  <span className="font-display text-primary">Q{i + 1}</span> {q}
                </li>
              ))}
            </ul>
          </Section>

          <Section step={2} done={done} onDone={markDone}>
            <article className="max-w-reading space-y-4 leading-relaxed">
              <h3 className="text-xl font-semibold">Our Planet, Our Responsibility</h3>
              <p>
                Every day, people use water, energy and materials from nature. These resources make our lives comfortable, but when we use too
                much of them or throw them away carelessly, the <mark className="rounded bg-primary/15 px-1 text-foreground">environment</mark>{' '}
                suffers. Air <mark className="rounded bg-primary/15 px-1 text-foreground">pollution</mark> from factories and cars, plastic{' '}
                <mark className="rounded bg-primary/15 px-1 text-foreground">waste</mark> in rivers and oceans, and{' '}
                <mark className="rounded bg-primary/15 px-1 text-foreground">deforestation</mark> are some of the most serious problems in the
                world today.
              </p>
              <p>
                Kazakhstan knows the cost of environmental damage very well. The Aral Sea was once one of the largest lakes on Earth. In the
                twentieth century, much of the water from the rivers that fed it was used for irrigation of cotton fields, and the sea became
                dramatically smaller. Fishing towns lost their jobs, and dust storms carried salt across the region. However, the story also
                shows that action can help: after a dam was built to keep water in the northern part of the sea, that part began to recover, and
                fish returned.
              </p>
              <p>
                Protecting nature is not only the job of governments. Small everyday actions also matter. We can{' '}
                <mark className="rounded bg-primary/15 px-1 text-foreground">recycle</mark> paper and plastic, use a reusable bottle, switch
                off lights, walk or cycle instead of driving, and plant trees. Many countries, including Kazakhstan, are developing{' '}
                <mark className="rounded bg-primary/15 px-1 text-foreground">renewable</mark> energy from the sun and wind to reduce harmful{' '}
                <mark className="rounded bg-primary/15 px-1 text-foreground">emissions</mark>.
              </p>
              <p>
                A <mark className="rounded bg-primary/15 px-1 text-foreground">sustainable</mark> future means meeting our needs today without
                destroying the resources that future generations will need. Rare animals such as the snow leopard are{' '}
                <mark className="rounded bg-primary/15 px-1 text-foreground">endangered</mark>, and their survival depends on our choices. Our
                planet is our only home — and protecting it is our shared responsibility.
              </p>
              <p className="text-xs text-muted-foreground">
                Highlighted words are in the{' '}
                <Link to="/vocabulary" className="text-primary underline underline-offset-2">
                  Student Vocabulary
                </Link>
                .
              </p>
            </article>
          </Section>

          <Section step={3} done={done} onDone={markDone} manual={false}>
            <VocabExercises onComplete={() => markDone('vocab')} />
          </Section>

          <Section step={4} done={done} onDone={markDone} manual={false}>
            <p className="text-muted-foreground">
              Watch the National Geographic video on your device, then decide if the statements are true or false.
            </p>
            <div className="mt-5 aspect-video overflow-hidden rounded-2xl border bg-black">
              <iframe
                className="size-full"
                src="https://www.youtube-nocookie.com/embed/G4H1N_yXBiA?rel=0"
                title="Causes and Effects of Climate Change | National Geographic"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <TrueFalse onComplete={() => markDone('online')} />
          </Section>

          <Section step={5} done={done} onDone={markDone} manual={false}>
            <Comprehension onComplete={() => markDone('questions')} />
          </Section>

          <Section step={6} done={done} onDone={markDone}>
            <Discussion />
          </Section>
        </div>
      </div>
    </>
  )
}

function Section({
  step,
  done,
  onDone,
  manual = true,
  children,
}: {
  step: number
  done: string[]
  onDone: (id: string) => void
  manual?: boolean
  children: React.ReactNode
}) {
  const { t } = useI18n()
  const s = STEPS[step]
  const isDone = done.includes(s.id)
  return (
    <section id={s.id} className={cn('scroll-mt-40 rounded-3xl border bg-card p-5 transition-colors sm:p-8 lg:scroll-mt-24', isDone && 'border-success/40')}>
      <header className="mb-5 flex flex-wrap items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary">
          <s.icon className="size-5" aria-hidden />
        </span>
        <div className="flex-1">
          <p className="font-display text-xs text-muted-foreground">
            Step {step + 1} / {STEPS.length} ·{' '}
            <span className={s.where === 'class' ? 'text-amber-600 dark:text-amber-300' : 'text-sky-600 dark:text-cyan-300'}>
              {s.where === 'class' ? 'Classroom' : 'Online'}
            </span>
          </p>
          <h2 className="text-lg font-semibold sm:text-xl">{s.title}</h2>
        </div>
        {isDone ? (
          <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
            <CheckCircle2 className="size-4" aria-hidden /> {t('lesson.done')}
          </span>
        ) : null}
      </header>
      {children}
      {manual && !isDone ? (
        <Button className="mt-6 rounded-full" variant="outline" onClick={() => onDone(s.id)}>
          <CheckCircle2 /> {t('lesson.markDone')}
        </Button>
      ) : null}
    </section>
  )
}

function ScoreBar({ score, total, onReset }: { score: number; total: number; onReset: () => void }) {
  const { t } = useI18n()
  const perfect = score === total
  return (
    <div
      role="status"
      className={cn(
        'mt-5 flex flex-wrap items-center gap-3 rounded-2xl p-4 text-sm font-medium',
        perfect ? 'bg-success/15 text-foreground' : 'bg-warning/15 text-foreground',
      )}
    >
      {perfect ? <Trophy className="size-5 text-warning" aria-hidden /> : <Sparkles className="size-5 text-primary" aria-hidden />}
      {t('quiz.score')}: {score} / {total}
      {!perfect ? <span className="text-muted-foreground">— check the highlighted answers and try again.</span> : null}
      <Button variant="ghost" size="sm" className="ml-auto" onClick={onReset}>
        <RotateCcw /> {t('common.reset')}
      </Button>
    </div>
  )
}

const selectClass =
  'h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50'

function VocabExercises({ onComplete }: { onComplete: () => void }) {
  const { t } = useI18n()
  const [match, setMatch] = React.useState<Record<string, string>>({})
  const [gaps, setGaps] = React.useState<Record<number, string>>({})
  const [checked, setChecked] = React.useState(false)

  const total = MATCHING.length + GAPS.length
  const score =
    MATCHING.filter((m) => match[m.word] === m.answer).length + GAPS.filter((g, i) => gaps[i] === g.answer).length
  const allAnswered = Object.keys(match).length === MATCHING.length && Object.keys(gaps).length === GAPS.length

  const check = () => {
    setChecked(true)
    if (score === total) onComplete()
  }

  const state = (ok: boolean) => (checked ? (ok ? 'border-success bg-success/10' : 'border-destructive bg-destructive/10') : '')

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold">A. Match each word with its definition</h3>
        <div className="mt-4 grid gap-3">
          {MATCHING.map((m) => (
            <label key={m.word} className="grid items-center gap-2 sm:grid-cols-[150px_1fr]">
              <span className="font-display text-sm font-semibold">{m.word}</span>
              <select
                className={cn(selectClass, state(match[m.word] === m.answer))}
                value={match[m.word] ?? ''}
                onChange={(e) => {
                  setChecked(false)
                  setMatch((p) => ({ ...p, [m.word]: e.target.value }))
                }}
              >
                <option value="" disabled>
                  Choose a definition…
                </option>
                {MATCH_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold">B. Complete the sentences</h3>
        <p className="mt-1 text-sm text-muted-foreground">Word bank: {GAP_BANK.join(' · ')}</p>
        <ol className="mt-4 space-y-3">
          {GAPS.map((g, i) => (
            <li key={g.before} className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-display text-xs text-muted-foreground">{i + 1}.</span>
              <span>{g.before}</span>
              <select
                aria-label={`Gap ${i + 1}`}
                className={cn(selectClass, 'w-auto min-w-36', state(gaps[i] === g.answer))}
                value={gaps[i] ?? ''}
                onChange={(e) => {
                  setChecked(false)
                  setGaps((p) => ({ ...p, [i]: e.target.value }))
                }}
              >
                <option value="" disabled>
                  ______
                </option>
                {GAP_BANK.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
              <span>{g.after}</span>
            </li>
          ))}
        </ol>
      </div>

      <Button className="rounded-full" onClick={check} disabled={!allAnswered}>
        {t('common.check')}
      </Button>
      {checked ? (
        <ScoreBar
          score={score}
          total={total}
          onReset={() => {
            setMatch({})
            setGaps({})
            setChecked(false)
          }}
        />
      ) : null}
    </div>
  )
}

function TrueFalse({ onComplete }: { onComplete: () => void }) {
  const { t } = useI18n()
  const [ans, setAns] = React.useState<Record<number, boolean>>({})
  const [checked, setChecked] = React.useState(false)
  const score = TRUE_FALSE.filter((x, i) => ans[i] === x.a).length
  return (
    <div className="mt-6">
      <h3 className="font-semibold">True or false?</h3>
      <ul className="mt-4 space-y-3">
        {TRUE_FALSE.map((x, i) => (
          <li
            key={x.s}
            className={cn(
              'flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center',
              checked && (ans[i] === x.a ? 'border-success bg-success/10' : 'border-destructive bg-destructive/10'),
            )}
          >
            <span className="flex-1 text-sm">{x.s}</span>
            <div className="flex gap-2" role="group" aria-label={`Statement ${i + 1}`}>
              {[true, false].map((v) => (
                <button
                  key={String(v)}
                  type="button"
                  aria-pressed={ans[i] === v}
                  onClick={() => {
                    setChecked(false)
                    setAns((p) => ({ ...p, [i]: v }))
                  }}
                  className={cn(
                    'rounded-full border px-4 py-1.5 text-sm font-medium transition-all',
                    ans[i] === v ? 'border-primary bg-primary text-primary-foreground' : 'hover:bg-accent',
                  )}
                >
                  {v ? 'True' : 'False'}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <Button
        className="mt-5 rounded-full"
        disabled={Object.keys(ans).length < TRUE_FALSE.length}
        onClick={() => {
          setChecked(true)
          if (score === TRUE_FALSE.length) onComplete()
        }}
      >
        {t('common.check')}
      </Button>
      {checked ? (
        <ScoreBar
          score={score}
          total={TRUE_FALSE.length}
          onReset={() => {
            setAns({})
            setChecked(false)
          }}
        />
      ) : null}
    </div>
  )
}

function Comprehension({ onComplete }: { onComplete: () => void }) {
  const { t } = useI18n()
  const [ans, setAns] = React.useState<Record<number, number>>({})
  const [checked, setChecked] = React.useState(false)
  const score = MCQ.filter((x, i) => ans[i] === x.a).length
  return (
    <div>
      <p className="text-muted-foreground">Answer the questions about the reading passage “Our Planet, Our Responsibility”.</p>
      <div className="mt-5 space-y-5">
        {MCQ.map((x, i) => (
          <fieldset key={x.q} className="rounded-2xl border p-4">
            <legend className="px-1 text-sm font-semibold">
              {i + 1}. {x.q}
            </legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {x.options.map((o, oi) => {
                const selected = ans[i] === oi
                const showCorrect = checked && oi === x.a
                const showWrong = checked && selected && oi !== x.a
                return (
                  <button
                    key={o}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      setChecked(false)
                      setAns((p) => ({ ...p, [i]: oi }))
                    }}
                    className={cn(
                      'rounded-xl border px-3 py-2.5 text-left text-sm transition-all hover:border-primary/60',
                      selected && 'border-primary bg-primary/10',
                      showCorrect && 'border-success bg-success/15',
                      showWrong && 'border-destructive bg-destructive/10',
                    )}
                  >
                    {o}
                  </button>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>
      <Button
        className="mt-5 rounded-full"
        disabled={Object.keys(ans).length < MCQ.length}
        onClick={() => {
          setChecked(true)
          if (score === MCQ.length) onComplete()
        }}
      >
        {t('common.check')}
      </Button>
      {checked ? (
        <ScoreBar
          score={score}
          total={MCQ.length}
          onReset={() => {
            setAns({})
            setChecked(false)
          }}
        />
      ) : null}
    </div>
  )
}

function Discussion() {
  const [notes, setNotes] = useLocalState<Record<string, string>>('bl-lesson-notes', {})
  const prompts = [
    'Which environmental problem in Kazakhstan do you think is the most serious? Why?',
    'Suggest three things your school could do to become more environmentally friendly.',
    'Did the online activities (video, quiz) help you understand the topic better than the text alone? Explain.',
  ]
  return (
    <div>
      <p className="text-muted-foreground">
        Back in the classroom, students discuss in groups. Prepare your ideas below — they are saved only on this device.
      </p>
      <div className="mt-5 space-y-4">
        {prompts.map((p, i) => (
          <div key={p}>
            <label htmlFor={`note-${i}`} className="text-sm font-semibold">
              {i + 1}. {p}
            </label>
            <Textarea
              id={`note-${i}`}
              className="mt-2 min-h-24 rounded-xl"
              placeholder="Write your ideas…"
              value={notes[i] ?? ''}
              onChange={(e) => setNotes((n) => ({ ...n, [i]: e.target.value }))}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
