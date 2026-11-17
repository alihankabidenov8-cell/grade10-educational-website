import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  BookOpen,
  Clock,
  Home as HomeIcon,
  Laptop,
  MessageSquare,
  MonitorPlay,
  Network,
  Presentation,
  RefreshCw,
  School,
  Shuffle,
  Sparkles,
  UserRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/how-it-works')({
  head: () => ({ meta: [{ title: 'How Blended Learning Works — Blended Learning' }] }),
  component: HowPage,
})

type Mode = 'traditional' | 'online' | 'blended'

const MODES: Record<Mode, { title: string; icon: LucideIcon; text: string; points: string[]; color: string }> = {
  traditional: {
    title: 'Traditional classroom learning',
    icon: School,
    color: 'from-amber-400 to-orange-500',
    text: 'Learning happens face-to-face, at a fixed time and place. The teacher explains, students listen, ask questions and practise together.',
    points: ['Live explanation and discussion', 'Immediate human support', 'Same pace for the whole class', 'Limited to school hours'],
  },
  online: {
    title: 'Digital online learning',
    icon: Laptop,
    color: 'from-cyan-400 to-sky-500',
    text: 'Learning happens through the internet: video lessons, digital exercises, quizzes and platforms that can be used anywhere, at any time.',
    points: ['Any time, any place', 'Own pace — pause and repeat', 'Instant automatic feedback', 'Less face-to-face contact'],
  },
  blended: {
    title: 'Blended learning — both combined',
    icon: Sparkles,
    color: 'from-electric to-cyan',
    text: 'Classroom and online learning are planned as one connected course. Online work prepares students for class, and class time deepens and checks understanding.',
    points: ['Human connection + flexibility', 'Class time for discussion and practice', 'Online tasks for preparation and review', 'Teacher sees progress data'],
  },
}

function Diagram({ mode }: { mode: Mode }) {
  const classOn = mode !== 'online'
  const onlineOn = mode !== 'traditional'
  const bridge = mode === 'blended'
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl" role="img" aria-label={`Diagram: ${MODES[mode].title}`}>
      <svg viewBox="0 0 640 400" className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="g-class" x1="0" x2="1">
            <stop offset="0" stopColor="#f59e0b" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="g-online" x1="1" x2="0">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        {/* classroom -> student */}
        <path
          d="M140 120 C220 120 250 200 320 210"
          fill="none"
          strokeWidth="4"
          stroke="url(#g-class)"
          className={cn('transition-opacity duration-500', classOn ? 'opacity-100 animate-dash' : 'opacity-15')}
        />
        {/* online -> student */}
        <path
          d="M500 120 C420 120 390 200 320 210"
          fill="none"
          strokeWidth="4"
          stroke="url(#g-online)"
          className={cn('transition-opacity duration-500', onlineOn ? 'opacity-100 animate-dash' : 'opacity-15')}
        />
        {/* bridge between classroom & online */}
        <path
          d="M150 90 C260 20 380 20 490 90"
          fill="none"
          strokeWidth="3"
          stroke="#60a5fa"
          strokeDasharray="4 8"
          className={cn('transition-opacity duration-500', bridge ? 'opacity-100 animate-dash' : 'opacity-0')}
        />
        {/* student -> outcomes */}
        <path
          d="M320 250 L320 330"
          fill="none"
          strokeWidth="4"
          stroke="#3b82f6"
          className="animate-dash"
        />
      </svg>

      <Node className="left-[3%] top-[14%]" active={classOn} icon={Presentation} label="Classroom" sub="Teacher-led" tint="from-amber-400 to-orange-500" />
      <Node className="right-[3%] top-[14%]" active={onlineOn} icon={MonitorPlay} label="Online platform" sub="Videos · Quizzes · LMS" tint="from-cyan-400 to-sky-500" />
      <div
        className={cn(
          'absolute left-1/2 top-[3%] -translate-x-1/2 rounded-full border bg-card px-3 py-1 text-xs font-semibold shadow transition-all duration-500',
          bridge ? 'opacity-100' : 'translate-y-2 opacity-0',
        )}
      >
        <RefreshCw className="mr-1 inline size-3.5 text-primary" aria-hidden />
        Connected learning
      </div>
      <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid size-20 place-items-center sm:size-24">
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
          <span className="relative grid size-full place-items-center rounded-full bg-gradient-to-br from-electric to-cyan text-white shadow-xl">
            <UserRound className="size-8 sm:size-10" aria-hidden />
          </span>
        </div>
        <p className="mt-2 text-center text-xs font-semibold sm:text-sm">Student</p>
      </div>
      <div className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 flex-wrap justify-center gap-1.5 sm:gap-2">
        {(mode === 'blended'
          ? ['Understanding', 'Engagement', 'Independence', 'Support']
          : mode === 'online'
            ? ['Flexibility', 'Own pace']
            : ['Discussion', 'Support']
        ).map((o) => (
          <span key={o} className="animate-fade-up rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground sm:text-xs">
            {o}
          </span>
        ))}
      </div>
    </div>
  )
}

function Node({
  className,
  active,
  icon: Icon,
  label,
  sub,
  tint,
}: {
  className: string
  active: boolean
  icon: LucideIcon
  label: string
  sub: string
  tint: string
}) {
  return (
    <div
      className={cn(
        'absolute w-[30%] rounded-2xl border bg-card p-2.5 shadow-lg transition-all duration-500 sm:p-4',
        active ? 'scale-100 opacity-100' : 'scale-95 opacity-40 grayscale',
        className,
      )}
    >
      <span className={cn('grid size-8 place-items-center rounded-xl bg-gradient-to-br text-white sm:size-11', tint)}>
        <Icon className="size-4 sm:size-5" aria-hidden />
      </span>
      <p className="mt-2 text-xs font-semibold sm:text-sm">{label}</p>
      <p className="hidden text-xs text-muted-foreground sm:block">{sub}</p>
    </div>
  )
}

const LESSON_FLOW = [
  { time: 'Before class', where: 'online', icon: HomeIcon, title: 'Prepare at home', text: 'Students watch a 6-minute video about climate change and learn 10 new words with flashcards.' },
  { time: '0–10 min', where: 'class', icon: Presentation, title: 'Teacher introduction', text: 'The teacher checks understanding with quick questions and introduces the lesson goals.' },
  { time: '10–25 min', where: 'class', icon: BookOpen, title: 'Reading & group work', text: 'Students read a text in pairs and discuss the main ideas with the teacher’s guidance.' },
  { time: '25–35 min', where: 'online', icon: Laptop, title: 'Online practice in class', text: 'On tablets or phones, students complete an interactive quiz with instant feedback.' },
  { time: '35–45 min', where: 'class', icon: MessageSquare, title: 'Discussion & reflection', text: 'The class discusses results; the teacher explains common mistakes shown by the quiz data.' },
  { time: 'After class', where: 'online', icon: Clock, title: 'Homework online', text: 'Students write a short opinion post on the class platform and review vocabulary.' },
] as const

const MODELS = [
  { icon: Shuffle, title: 'Station rotation', text: 'Students rotate between stations in class — teacher-led, group work and an online station.' },
  { icon: RefreshCw, title: 'Flipped classroom', text: 'New material is studied online at home; class time is used for practice, projects and discussion.' },
  { icon: Network, title: 'Flex model', text: 'Most learning is online; teachers provide flexible face-to-face support when students need it.' },
  { icon: Laptop, title: 'Enriched virtual', text: 'Students attend required face-to-face sessions and complete the rest of the course online.' },
]

function HowPage() {
  const { t } = useI18n()
  const [mode, setMode] = React.useState<Mode>('blended')
  const current = MODES[mode]
  return (
    <>
      <PageHero icon={Network} eyebrow={t('common.shortTitle')} title={t('how.title')} subtitle={t('how.subtitle')} />

      <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <div role="tablist" aria-label="Learning modes" className="mx-auto flex w-full max-w-2xl flex-col gap-2 rounded-2xl border bg-muted/50 p-1.5 sm:flex-row">
          {(Object.keys(MODES) as Mode[]).map((m) => {
            const M = MODES[m]
            return (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                onClick={() => setMode(m)}
                className={cn(
                  'flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all',
                  mode === m ? 'bg-card text-foreground shadow-md' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <M.icon className="size-4 text-primary" aria-hidden />
                {m === 'traditional' ? 'Traditional' : m === 'online' ? 'Online' : 'Blended'}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border bg-gradient-to-b from-accent/50 to-card p-4 sm:p-6">
            <Diagram mode={mode} />
          </div>
          <div key={mode} className="animate-fade-up">
            <span className={cn('grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg', current.color)}>
              <current.icon className="size-6" aria-hidden />
            </span>
            <h2 className="mt-4 text-2xl font-semibold">{current.title}</h2>
            <p className="mt-3 text-muted-foreground">{current.text}</p>
            <ul className="mt-5 grid gap-2">
              {current.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 rounded-xl border bg-card px-4 py-2.5 text-sm">
                  <span className="size-2 rounded-full bg-primary" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Example" title="A blended lesson, step by step" text="An English lesson on environmental protection (45 minutes + online work before and after)." />
          </Reveal>
          <ol className="relative mt-10 space-y-4 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-cyan sm:before:left-[23px]">
            {LESSON_FLOW.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 70}>
                <div className="relative flex gap-4">
                  <span
                    className={cn(
                      'relative z-10 grid size-10 shrink-0 place-items-center rounded-full text-white shadow-lg sm:size-12',
                      s.where === 'class' ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-cyan-400 to-sky-500',
                    )}
                  >
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <div className="flex-1 rounded-2xl border bg-card p-4 transition-all hover:card-glow">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-xs text-muted-foreground">{s.time}</span>
                      <span
                        className={cn(
                          'rounded-full px-2 py-0.5 text-[11px] font-semibold',
                          s.where === 'class' ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300' : 'bg-cyan-500/15 text-sky-700 dark:text-cyan-300',
                        )}
                      >
                        {s.where === 'class' ? 'Classroom' : 'Online'}
                      </span>
                    </div>
                    <p className="mt-1 font-semibold">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Models" title="Popular models of blended learning" text="Described in Staker & Horn (2012), Classifying K–12 Blended Learning." />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODELS.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <article className="group h-full rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:card-glow">
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <m.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
