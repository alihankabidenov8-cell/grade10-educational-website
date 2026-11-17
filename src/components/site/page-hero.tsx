import * as React from 'react'
import type { LucideIcon } from 'lucide-react'

export function PageHero({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  icon: LucideIcon
  eyebrow: string
  title: string
  subtitle: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute -right-20 -top-24 size-80 rounded-full bg-electric/30 blur-3xl animate-float-slow"
        aria-hidden
      />
      <div className="relative mx-auto max-w-content px-4 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-36">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
          <Icon className="size-3.5 text-cyan" aria-hidden />
          {eyebrow}
        </div>
        <h1
          className="animate-fade-up mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        <p
          className="animate-fade-up mt-4 max-w-2xl text-base text-white/75 md:text-lg"
          style={{ animationDelay: '160ms' }}
        >
          {subtitle}
        </p>
        {children ? (
          <div className="animate-fade-up mt-8" style={{ animationDelay: '240ms' }}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center,
}: {
  eyebrow?: string
  title: string
  text?: string
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
      {text ? <p className="mt-3 text-muted-foreground">{text}</p> : null}
    </div>
  )
}
