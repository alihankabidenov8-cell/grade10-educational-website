import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, ExternalLink, Play, PlayCircle, RotateCcw, Video as VideoIcon, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { useI18n } from '@/lib/i18n'
import { useLocalState } from '@/lib/storage'
import { cn } from '@/lib/utils'
import { VIDEOS, VIDEO_CATEGORIES, type Video, type VideoCategory } from '@/data/videos'

export const Route = createFileRoute('/videos')({
  head: () => ({ meta: [{ title: 'Video Lessons — Blended Learning' }] }),
  component: VideosPage,
})

function VideosPage() {
  const { t, tl } = useI18n()
  const [cat, setCat] = React.useState<VideoCategory | 'all'>('all')
  const [active, setActive] = React.useState<Video | null>(null)
  const [watched, setWatched] = useLocalState<string[]>('bl-videos-done', [])
  const list = cat === 'all' ? VIDEOS : VIDEOS.filter((v) => v.category === cat)

  return (
    <>
      <PageHero icon={VideoIcon} eyebrow={`${VIDEOS.length} videos · YouTube`} title={t('videos.title')} subtitle={t('videos.subtitle')} />
      <section className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Categories">
          {[{ id: 'all' as const, label: t('videos.all') }, ...VIDEO_CATEGORIES.map((c) => ({ id: c.id, label: tl(c.label) }))].map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                cat === c.id ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25' : 'bg-card hover:border-primary/50',
              )}
            >
              {c.label}
              <span className="ml-1.5 opacity-60">{c.id === 'all' ? VIDEOS.length : VIDEOS.filter((v) => v.category === c.id).length}</span>
            </button>
          ))}
          <p className="ml-auto text-sm text-muted-foreground">
            <CheckCircle2 className="mr-1 inline size-4 text-success" aria-hidden />
            {watched.length} / {VIDEOS.length}
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((v, i) => (
            <Reveal key={v.id} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all hover:-translate-y-1 hover:card-glow">
                <button
                  type="button"
                  onClick={() => setActive(v)}
                  className="relative block aspect-video overflow-hidden bg-navy"
                  aria-label={`Play: ${v.title}`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-primary shadow-2xl transition-transform group-hover:scale-110">
                    <Play className="ml-1 size-7 fill-current" aria-hidden />
                  </span>
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    {tl(VIDEO_CATEGORIES.find((c) => c.id === v.category)!.label)}
                  </span>
                  {watched.includes(v.id) ? (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-success px-2.5 py-1 text-[11px] font-semibold text-white">
                      <CheckCircle2 className="size-3.5" aria-hidden /> Done
                    </span>
                  ) : null}
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-base font-semibold leading-snug">{v.title}</h2>
                  <p className="mt-1 text-xs font-medium text-primary">{v.channel}</p>
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{v.description}</p>
                  <Button className="mt-auto w-full rounded-full" variant="outline" onClick={() => setActive(v)}>
                    <PlayCircle /> {t('videos.watch')}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          All videos are publicly available on YouTube and belong to their respective creators. They are embedded for educational purposes.
        </p>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[92vh] overflow-y-auto p-0 sm:max-w-4xl">
          {active ? (
            <VideoPlayer
              video={active}
              onCompleted={() => setWatched((w) => (w.includes(active.id) ? w : [...w, active.id]))}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}

function VideoPlayer({ video, onCompleted }: { video: Video; onCompleted: () => void }) {
  const { t } = useI18n()
  const [ans, setAns] = React.useState<Record<number, number>>({})
  const [checked, setChecked] = React.useState(false)
  const [note, setNote] = useLocalState<string>(`bl-video-note-${video.id}`, '')
  const score = video.exercises.filter((e, i) => ans[i] === e.answer).length

  return (
    <div>
      <div className="aspect-video w-full bg-black">
        <iframe
          className="size-full"
          src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="space-y-5 p-5 sm:p-7">
        <DialogHeader className="text-left">
          <DialogTitle className="font-display text-xl">{video.title}</DialogTitle>
          <DialogDescription>
            {video.channel} ·{' '}
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-primary underline-offset-2 hover:underline"
            >
              YouTube <ExternalLink className="size-3" aria-hidden />
            </a>
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">{video.description}</p>

        <div className="rounded-2xl border bg-muted/40 p-4 sm:p-5">
          <h3 className="font-semibold">{t('videos.exercise')}</h3>
          <div className="mt-4 space-y-4">
            {video.exercises.map((e, i) => (
              <fieldset key={e.question}>
                <legend className="text-sm font-medium">
                  {i + 1}. {e.question}
                </legend>
                <div className="mt-2 grid gap-2">
                  {e.options.map((o, oi) => {
                    const sel = ans[i] === oi
                    return (
                      <button
                        key={o}
                        type="button"
                        aria-pressed={sel}
                        onClick={() => {
                          setChecked(false)
                          setAns((p) => ({ ...p, [i]: oi }))
                        }}
                        className={cn(
                          'flex items-center gap-2 rounded-xl border bg-card px-3 py-2 text-left text-sm transition-all hover:border-primary/60',
                          sel && 'border-primary bg-primary/10',
                          checked && oi === e.answer && 'border-success bg-success/15',
                          checked && sel && oi !== e.answer && 'border-destructive bg-destructive/10',
                        )}
                      >
                        {checked && oi === e.answer ? <CheckCircle2 className="size-4 shrink-0 text-success" aria-hidden /> : null}
                        {checked && sel && oi !== e.answer ? <XCircle className="size-4 shrink-0 text-destructive" aria-hidden /> : null}
                        {o}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button
              className="rounded-full"
              disabled={Object.keys(ans).length < video.exercises.length}
              onClick={() => {
                setChecked(true)
                if (score === video.exercises.length) onCompleted()
              }}
            >
              {t('common.check')}
            </Button>
            {checked ? (
              <>
                <p role="status" className="text-sm font-medium">
                  {t('quiz.score')}: {score} / {video.exercises.length} {score === video.exercises.length ? '🎉' : ''}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setAns({})
                    setChecked(false)
                  }}
                >
                  <RotateCcw /> {t('common.reset')}
                </Button>
              </>
            ) : null}
          </div>
          <label htmlFor="reflection" className="mt-5 block text-sm font-medium">
            Reflection: {video.reflection}
          </label>
          <Textarea
            id="reflection"
            className="mt-2 rounded-xl bg-card"
            placeholder="Your answer (saved on this device)…"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
