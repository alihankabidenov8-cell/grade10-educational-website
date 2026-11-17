import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Blend, Compass, Cpu, Flame, Globe, LayoutDashboard, School, ScrollText, Sparkles, Split, UserRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { TERMS, type Term } from '@/data/terms'

export const Route = createFileRoute('/terms')({
  head: () => ({ meta: [{ title: 'Key Research Terms — Blended Learning' }] }),
  component: TermsPage,
})

const ICONS: Record<Term['icon'], LucideIcon> = {
  blend: Blend,
  school: School,
  globe: Globe,
  cpu: Cpu,
  flame: Flame,
  user: UserRound,
  layout: LayoutDashboard,
  sparkles: Sparkles,
  compass: Compass,
  split: Split,
}

function TermsPage() {
  const { t, lang } = useI18n()
  const [open, setOpen] = React.useState<string | null>(TERMS[0].term)
  return (
    <>
      <PageHero icon={ScrollText} eyebrow={`${TERMS.length} terms`} title={t('terms.title')} subtitle={t('terms.subtitle')} />
      <section className="mx-auto max-w-content px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {TERMS.map((term, i) => {
            const Icon = ICONS[term.icon]
            const isOpen = open === term.term
            const translation = lang === 'ru' ? term.ru : lang === 'kk' ? term.kk : `${term.ru} · ${term.kk}`
            return (
              <Reveal key={term.term} delay={(i % 2) * 80}>
                <article
                  className={cn(
                    'h-full rounded-3xl border bg-card transition-all duration-300',
                    isOpen ? 'border-primary/50 card-glow' : 'hover:border-primary/30',
                  )}
                >
                  <h2>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : term.term)}
                      className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                    >
                      <span
                        className={cn(
                          'grid size-12 shrink-0 place-items-center rounded-2xl transition-all',
                          isOpen ? 'bg-gradient-to-br from-electric to-cyan text-white shadow-lg' : 'bg-accent text-primary',
                        )}
                      >
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <span className="flex-1">
                        <span className="block font-display text-base font-semibold sm:text-lg">
                          <span className="mr-2 text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                          {term.term}
                        </span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">{translation}</span>
                      </span>
                      <span className={cn('text-xl text-primary transition-transform', isOpen && 'rotate-45')} aria-hidden>
                        +
                      </span>
                    </button>
                  </h2>
                  <div className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                    <div className="overflow-hidden">
                      <div className="space-y-3 px-5 pb-6 sm:px-6">
                        <p className="leading-relaxed">{term.definition}</p>
                        <p className="rounded-2xl bg-muted/60 p-3 text-sm text-muted-foreground">
                          <b className="text-foreground">Example:</b> {term.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
