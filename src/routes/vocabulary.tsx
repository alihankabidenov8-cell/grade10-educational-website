import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  BookA,
  Check,
  ChevronLeft,
  ChevronRight,
  Languages,
  LayoutGrid,
  Layers,
  RotateCcw,
  Search,
  Shuffle,
  Volume2,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import { PageHero } from '@/components/site/page-hero'
import { useI18n } from '@/lib/i18n'
import { useLocalState } from '@/lib/storage'
import { cn } from '@/lib/utils'
import { VOCABULARY, VOCAB_CATEGORIES, type VocabCategory, type Word } from '@/data/vocabulary'

export const Route = createFileRoute('/vocabulary')({
  head: () => ({ meta: [{ title: 'Student Vocabulary — Blended Learning' }] }),
  component: VocabularyPage,
})

function speak(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'en-GB'
  u.rate = 0.9
  window.speechSynthesis.speak(u)
}

function VocabularyPage() {
  const { t, tl } = useI18n()
  const [query, setQuery] = React.useState('')
  const [cat, setCat] = React.useState<VocabCategory | 'all'>('all')
  const [view, setView] = React.useState<'list' | 'cards'>('list')
  const [hideLearned, setHideLearned] = React.useState(false)
  const [learned, setLearned] = useLocalState<string[]>('bl-vocab-learned', [])

  const toggleLearned = (w: string) => setLearned((l) => (l.includes(w) ? l.filter((x) => x !== w) : [...l, w]))

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return VOCABULARY.filter((w) => {
      if (cat !== 'all' && w.category !== cat) return false
      if (hideLearned && learned.includes(w.word)) return false
      if (!q) return true
      return [w.word, w.ru, w.kk, w.definition, w.example].some((f) => f.toLowerCase().includes(q))
    })
  }, [query, cat, hideLearned, learned])

  const pct = Math.round((learned.length / VOCABULARY.length) * 100)

  return (
    <>
      <PageHero icon={Languages} eyebrow={`${VOCABULARY.length} words · EN · RU · KZ`} title={t('vocab.title')} subtitle={t('vocab.subtitle')}>
        <div className="max-w-md rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/80">{t('vocab.learned')}</span>
            <span className="font-display">
              {learned.length} / {VOCABULARY.length}
            </span>
          </div>
          <Progress value={pct} className="mt-2 h-2 bg-white/20 [&>*]:bg-cyan" aria-label={t('vocab.learned')} />
        </div>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-10 sm:px-6">
        <div className="sticky top-16 z-20 -mx-4 space-y-3 border-b bg-background/90 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('vocab.search')}
                aria-label={t('vocab.search')}
                className="h-11 rounded-full pl-10 pr-10"
              />
              {query ? (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full hover:bg-muted"
                >
                  <X className="size-3.5" aria-hidden />
                </button>
              ) : null}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex rounded-full border bg-muted/50 p-1" role="group" aria-label="View">
                {(
                  [
                    ['list', t('vocab.list'), LayoutGrid],
                    ['cards', t('vocab.cards'), Layers],
                  ] as const
                ).map(([v, label, Icon]) => (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={view === v}
                    onClick={() => setView(v)}
                    className={cn(
                      'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all',
                      view === v ? 'bg-card shadow' : 'text-muted-foreground',
                    )}
                  >
                    <Icon className="size-4" aria-hidden /> {label}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <Switch checked={hideLearned} onCheckedChange={setHideLearned} />
                <span className="hidden sm:inline">{t('vocab.hideLearned')}</span>
              </label>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Categories">
            {[{ id: 'all' as const, label: t('videos.all') }, ...VOCAB_CATEGORIES.map((c) => ({ id: c.id, label: tl(c.label) }))].map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={cat === c.id}
                onClick={() => setCat(c.id)}
                className={cn(
                  'shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all',
                  cat === c.id ? 'border-primary bg-primary text-primary-foreground' : 'bg-card hover:border-primary/50',
                )}
              >
                {c.label}
                <span className="ml-1.5 opacity-60">
                  {c.id === 'all' ? VOCABULARY.length : VOCABULARY.filter((w) => w.category === c.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          {filtered.length} / {VOCABULARY.length}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-6 grid place-items-center rounded-3xl border border-dashed p-12 text-center">
            <BookA className="size-10 text-muted-foreground" aria-hidden />
            <p className="mt-3 font-medium">{t('vocab.none')}</p>
            <Button
              variant="outline"
              className="mt-4 rounded-full"
              onClick={() => {
                setQuery('')
                setCat('all')
                setHideLearned(false)
              }}
            >
              <RotateCcw /> {t('common.reset')}
            </Button>
          </div>
        ) : view === 'list' ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((w) => (
              <WordCard key={w.word} w={w} learned={learned.includes(w.word)} onToggle={() => toggleLearned(w.word)} />
            ))}
          </div>
        ) : (
          <Flashcards words={filtered} learned={learned} onToggle={toggleLearned} />
        )}
      </section>
    </>
  )
}

function WordCard({ w, learned, onToggle }: { w: Word; learned: boolean; onToggle: () => void }) {
  const { t, tl } = useI18n()
  return (
    <article className={cn('flex flex-col rounded-3xl border bg-card p-5 transition-all hover:card-glow', learned && 'border-success/50 bg-success/5')}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="font-display text-lg font-semibold">{w.word}</h2>
          <p className="text-xs italic text-muted-foreground">
            {w.pos} · {tl(VOCAB_CATEGORIES.find((c) => c.id === w.category)!.label)}
          </p>
        </div>
        <button
          type="button"
          onClick={() => speak(w.word)}
          aria-label={`Pronounce ${w.word}`}
          className="grid size-9 shrink-0 place-items-center rounded-full bg-accent text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Volume2 className="size-4" aria-hidden />
        </button>
      </div>
      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm">
        <dt className="font-semibold text-muted-foreground">RU</dt>
        <dd>{w.ru}</dd>
        <dt className="font-semibold text-muted-foreground">KZ</dt>
        <dd>{w.kk}</dd>
      </dl>
      <p className="mt-3 text-sm">{w.definition}</p>
      <p className="mt-2 rounded-xl bg-muted/60 p-3 text-sm italic text-muted-foreground">“{w.example}”</p>
      <Button
        variant={learned ? 'default' : 'outline'}
        size="sm"
        className={cn('mt-4 self-start rounded-full', learned && 'bg-success text-white hover:bg-success/90')}
        onClick={onToggle}
        aria-pressed={learned}
      >
        <Check /> {learned ? t('vocab.learned') : t('vocab.markLearned')}
      </Button>
    </article>
  )
}

function Flashcards({ words, learned, onToggle }: { words: Word[]; learned: string[]; onToggle: (w: string) => void }) {
  const { t } = useI18n()
  const [order, setOrder] = React.useState(words)
  const [i, setI] = React.useState(0)
  const [flipped, setFlipped] = React.useState(false)

  const wordsKey = words.map((x) => x.word).join('|')
  React.useEffect(() => {
    setOrder(words)
    setI((x) => (x >= words.length ? 0 : x))
    setFlipped(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsKey])

  const w = order[Math.min(i, order.length - 1)]
  const go = (d: number) => {
    setFlipped(false)
    setI((x) => (x + d + order.length) % order.length)
  }

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (!w) return null
  const isLearned = learned.includes(w.word)

  return (
    <div className="mx-auto mt-6 max-w-xl">
      <p className="text-center text-sm text-muted-foreground">{t('vocab.flip')}</p>
      <div className={cn('flip-card mt-4 h-80 sm:h-96', flipped && 'is-flipped')}>
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-label={`Flashcard: ${w.word}. ${flipped ? 'Showing translation' : 'Showing word'}`}
          className="flip-inner relative block size-full rounded-[2rem] text-left outline-none focus-visible:ring-4 focus-visible:ring-ring/50"
        >
          <span className="flip-face absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] bg-hero p-8 text-center text-white shadow-2xl">
            <span className="absolute inset-0 rounded-[2rem] bg-grid opacity-50" />
            <span className="relative text-xs uppercase tracking-[0.2em] text-cyan">{w.pos}</span>
            <span className="relative mt-3 font-display text-3xl font-semibold sm:text-4xl">{w.word}</span>
            <span className="relative mt-6 text-sm text-white/60">↻ {t('vocab.flip')}</span>
            {isLearned ? (
              <span className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-success px-2.5 py-1 text-xs font-semibold">
                <Check className="size-3.5" aria-hidden /> {t('vocab.learned')}
              </span>
            ) : null}
          </span>
          <span className="flip-face flip-back absolute inset-0 flex flex-col justify-center gap-3 rounded-[2rem] border bg-card p-7 shadow-2xl">
            <span className="font-display text-xl font-semibold text-primary">{w.word}</span>
            <span className="text-sm">
              <b>RU:</b> {w.ru}
            </span>
            <span className="text-sm">
              <b>KZ:</b> {w.kk}
            </span>
            <span className="text-sm text-muted-foreground">{w.definition}</span>
            <span className="rounded-xl bg-muted/60 p-3 text-sm italic">“{w.example}”</span>
          </span>
        </button>
      </div>

      <div className="mt-6 flex items-center justify-between gap-2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={() => go(-1)} aria-label={t('common.back')}>
          <ChevronLeft />
        </Button>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-display text-sm">
            {i + 1} / {order.length}
          </span>
          <Button
            size="sm"
            variant={isLearned ? 'default' : 'outline'}
            className={cn('rounded-full', isLearned && 'bg-success text-white hover:bg-success/90')}
            onClick={() => onToggle(w.word)}
            aria-pressed={isLearned}
          >
            <Check /> {isLearned ? t('vocab.learned') : t('vocab.markLearned')}
          </Button>
          <Button size="sm" variant="ghost" className="rounded-full" onClick={() => speak(w.word)} aria-label={`Pronounce ${w.word}`}>
            <Volume2 />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="rounded-full"
            onClick={() => {
              setOrder((o) => [...o].sort(() => Math.random() - 0.5))
              setI(0)
              setFlipped(false)
            }}
          >
            <Shuffle /> {t('vocab.shuffle')}
          </Button>
        </div>
        <Button variant="outline" size="icon" className="rounded-full" onClick={() => go(1)} aria-label={t('common.next')}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
