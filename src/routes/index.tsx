import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardList,
  FlaskConical,
  Heart,
  Languages,
  Layers,
  MonitorPlay,
  PlayCircle,
  Presentation,
  QrCode,
  Sparkles,
  Timer,
  UserRound,
  Users,
  Video,
  Wifi,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/page-hero'
import { useI18n } from '@/lib/i18n'
import { QUIZ } from '@/data/quiz'
import { VOCABULARY } from '@/data/vocabulary'
import { VIDEOS } from '@/data/videos'
import { SURVEY } from '@/data/survey'
import { TERMS } from '@/data/terms'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { t } = useI18n()
  return (
    <>
      <Hero />

      {/* Intro */}
      <section id="intro" className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow={t('common.shortTitle')} title={t('home.introTitle')} />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t('home.introText')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/how-it-works">
                  {t('nav.how')} <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-full">
                <Link to="/terms">{t('nav.terms')}</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-electric/25 to-cyan/20 blur-2xl" aria-hidden />
              <img
                src="/.netlify/images?url=/img/blended-classroom.png&w=900&fm=webp"
                alt="Illustration of a classroom where a teacher and students with laptops are connected to online learning tools"
                width={900}
                height={506}
                loading="lazy"
                className="relative aspect-video w-full rounded-3xl border object-cover shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-muted/50 py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <SectionHeading center eyebrow="01 · 02 · 03" title={t('home.featuresTitle')} />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Timer, title: t('home.f1'), text: t('home.f1d'), tint: 'from-electric to-cyan' },
              { icon: UserRound, title: t('home.f2'), text: t('home.f2d'), tint: 'from-violet-500 to-electric' },
              { icon: Heart, title: t('home.f3'), text: t('home.f3d'), tint: 'from-emerald-500 to-cyan' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <article className="group relative h-full overflow-hidden rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:card-glow">
                  <div
                    className={`absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br ${f.tint} opacity-10 blur-2xl transition-opacity group-hover:opacity-30`}
                    aria-hidden
                  />
                  <div className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${f.tint} text-white shadow-lg`}>
                    <f.icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-muted-foreground">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <LearningPath />

      {/* CTA */}
      <section className="mx-auto max-w-content px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-hero p-8 text-white md:p-14">
            <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
              <div>
                <h2 className="text-2xl font-semibold sm:text-3xl">{t('home.ctaTitle')}</h2>
                <p className="mt-3 max-w-xl text-white/75">{t('home.ctaText')}</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button asChild size="lg" className="rounded-full bg-white text-navy hover:bg-white/90">
                  <Link to="/survey">
                    <ClipboardList /> {t('survey.take')}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white">
                  <Link to="/qr">
                    <QrCode /> {t('nav.qr')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute -left-32 top-40 size-96 rounded-full bg-cyan/20 blur-3xl animate-float-slow" aria-hidden />
      <div className="relative mx-auto grid max-w-content items-center gap-12 px-4 pb-20 pt-32 sm:px-6 md:pt-36 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
        <div>
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-cyan animate-pulse-ring" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan" />
            </span>
            {t('home.badge')}
          </p>
          <h1 className="animate-fade-up mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl" style={{ animationDelay: '80ms' }}>
            {t('home.titleA')} <span className="text-gradient">{t('home.titleB')}</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg text-white/75" style={{ animationDelay: '160ms' }}>
            {t('home.subtitle')}
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
            <Button asChild size="lg" className="h-12 rounded-full bg-gradient-to-r from-electric to-cyan px-6 text-white shadow-xl shadow-electric/30 transition-transform hover:scale-[1.03]">
              <Link to="/lesson">
                <BookOpen /> {t('home.start')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/25 bg-white/5 px-6 text-white backdrop-blur hover:bg-white/15 hover:text-white">
              <Link to="/research">
                <FlaskConical /> {t('home.explore')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-12 rounded-full px-5 text-white hover:bg-white/10 hover:text-white">
              <Link to="/quiz">
                <Brain /> {t('home.quiz')}
              </Link>
            </Button>
          </div>
          <a
            href="#intro"
            className="animate-fade-up mt-10 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            style={{ animationDelay: '320ms' }}
          >
            <span className="grid size-7 place-items-center rounded-full border border-white/20">↓</span>
            {t('home.introTitle')}
          </a>
        </div>
        <HeroIllustration />
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden>
      {/* orbit rings */}
      <div className="absolute inset-[8%] rounded-full border border-white/10 animate-spin-slow" />
      <div className="absolute inset-[22%] rounded-full border border-dashed border-cyan/25" />

      {/* connections */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="hl" x1="0" x2="1">
            <stop offset="0" stopColor="#7cc4ff" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <path d="M95 110 C150 150 160 180 200 200" stroke="url(#hl)" strokeWidth="2.5" fill="none" className="animate-dash" />
        <path d="M305 110 C250 150 240 180 200 200" stroke="url(#hl)" strokeWidth="2.5" fill="none" className="animate-dash" />
        <path d="M200 200 C200 250 200 270 200 310" stroke="url(#hl)" strokeWidth="2.5" fill="none" className="animate-dash" />
      </svg>

      {/* center orb */}
      <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center">
        <span className="absolute inset-0 rounded-full bg-electric/40 animate-pulse-ring" />
        <span className="relative grid size-24 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan shadow-2xl shadow-electric/50">
          <Layers className="size-10 text-white" />
        </span>
      </div>

      {/* classroom card */}
      <div className="absolute left-[2%] top-[12%] w-40 rounded-2xl border border-white/15 bg-white/10 p-3 shadow-xl backdrop-blur-md animate-float sm:w-44">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="grid size-7 place-items-center rounded-lg bg-amber-400/90 text-navy">
            <Presentation className="size-4" />
          </span>
          Classroom
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full rounded bg-white/30" />
          <div className="h-1.5 w-3/4 rounded bg-white/20" />
          <div className="flex -space-x-1.5 pt-1.5">
            {['bg-cyan', 'bg-amber-300', 'bg-emerald-300', 'bg-pink-300'].map((c) => (
              <span key={c} className={`size-5 rounded-full border-2 border-navy ${c}`} />
            ))}
          </div>
        </div>
      </div>

      {/* online card */}
      <div className="absolute right-[2%] top-[12%] w-40 rounded-2xl border border-white/15 bg-white/10 p-3 shadow-xl backdrop-blur-md animate-float-slow sm:w-44">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="grid size-7 place-items-center rounded-lg bg-cyan text-navy">
            <MonitorPlay className="size-4" />
          </span>
          Online
          <Wifi className="ml-auto size-3.5 text-cyan" />
        </div>
        <div className="mt-3 grid aspect-video place-items-center rounded-lg bg-navy/60">
          <PlayCircle className="size-7 text-white/90" />
        </div>
      </div>

      {/* result card */}
      <div className="absolute bottom-[4%] left-1/2 w-56 -translate-x-1/2 rounded-2xl border border-white/15 bg-white p-3.5 text-navy shadow-2xl animate-float">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-electric to-cyan text-white">
            <Sparkles className="size-4" />
          </span>
          Blended lesson
          <CheckCircle2 className="ml-auto size-4 text-emerald-500" />
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-electric to-cyan" />
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-slate-500">
          <span>Teacher + Platform</span>
          <span>Learning together</span>
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute left-[6%] top-[58%] flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium backdrop-blur animate-float-slow">
        <Users className="size-3.5 text-amber-300" /> Discussion
      </div>
      <div className="absolute right-[4%] top-[56%] flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium backdrop-blur animate-float">
        <Brain className="size-3.5 text-cyan" /> Quiz
      </div>
    </div>
  )
}

function Stats() {
  const { t } = useI18n()
  const items = [
    { value: QUIZ.length, label: t('nav.quiz'), icon: Brain },
    { value: VOCABULARY.length, label: t('nav.vocabulary'), icon: Languages },
    { value: VIDEOS.length, label: t('nav.videos'), icon: Video },
    { value: SURVEY.length, label: t('nav.survey'), icon: ClipboardList },
    { value: TERMS.length, label: t('nav.terms'), icon: BookOpen },
    { value: 3, label: 'EN · RU · KZ', icon: Languages },
  ]
  const week = [
    { label: 'Mon', mode: 'class' },
    { label: 'Tue', mode: 'online' },
    { label: 'Wed', mode: 'class' },
    { label: 'Thu', mode: 'online' },
    { label: 'Fri', mode: 'class' },
  ] as const
  return (
    <section id="stats" className="mx-auto max-w-content px-4 py-20 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <SectionHeading eyebrow="Platform" title={t('home.statsTitle')} text={t('home.statsNote')} />
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {items.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:card-glow">
                  <s.icon className="size-5 text-primary" aria-hidden />
                  <p className="mt-3 font-display text-3xl font-semibold">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={150}>
          <div className="h-full rounded-3xl border bg-card p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{t('home.illustrativeTitle')}</h3>
              <span className="shrink-0 rounded-full border border-warning/40 bg-warning/15 px-2.5 py-1 text-[11px] font-semibold text-foreground">
                {t('home.illustrative')}
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {week.map((d) => (
                <li key={d.label} className="flex items-center gap-3">
                  <span className="w-10 text-sm font-medium text-muted-foreground">{d.label}</span>
                  <div className="flex h-9 flex-1 overflow-hidden rounded-xl text-xs font-medium">
                    {d.mode === 'class' ? (
                      <>
                        <span className="flex basis-2/3 items-center gap-1.5 bg-primary px-3 text-primary-foreground">
                          <Presentation className="size-3.5" aria-hidden /> Classroom
                        </span>
                        <span className="flex basis-1/3 items-center gap-1.5 bg-cyan/30 px-3">
                          <MonitorPlay className="size-3.5" aria-hidden /> Online
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="flex basis-1/3 items-center gap-1.5 bg-primary px-3 text-primary-foreground">
                          <Presentation className="size-3.5" aria-hidden /> Class
                        </span>
                        <span className="flex basis-2/3 items-center gap-1.5 bg-cyan/30 px-3">
                          <MonitorPlay className="size-3.5" aria-hidden /> Online practice
                        </span>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              A sample timetable showing how classroom and online time can alternate. It is a teaching model, not a measurement.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function LearningPath() {
  const { t } = useI18n()
  const steps = [
    { to: '/research', label: t('nav.research'), icon: FlaskConical },
    { to: '/how-it-works', label: t('nav.how'), icon: Layers },
    { to: '/lesson', label: t('nav.lesson'), icon: BookOpen },
    { to: '/videos', label: t('nav.videos'), icon: Video },
    { to: '/vocabulary', label: t('nav.vocabulary'), icon: Languages },
    { to: '/quiz', label: t('nav.quiz'), icon: Brain },
    { to: '/survey', label: t('nav.survey'), icon: ClipboardList },
  ] as const
  return (
    <section id="path" className="bg-muted/50 py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal>
          <SectionHeading center eyebrow={t('nav.learn')} title={t('home.pathTitle')} text={t('home.pathText')} />
        </Reveal>
        <ol className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {steps.map((s, i) => (
            <Reveal key={s.to} as="li" delay={i * 60}>
              <Link
                to={s.to}
                className="group flex h-full flex-col items-start gap-3 rounded-2xl border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:card-glow lg:items-center lg:text-center"
              >
                <span className="flex w-full items-center justify-between lg:justify-center">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-display text-xs text-muted-foreground lg:hidden">0{i + 1}</span>
                </span>
                <span className="text-sm font-semibold">{s.label}</span>
                <span className="hidden font-display text-xs text-muted-foreground lg:block">0{i + 1}</span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
