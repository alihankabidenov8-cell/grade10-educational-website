import * as React from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Check, ChevronDown, Globe, Menu, Moon, Sparkles, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { LANGS, useI18n } from '@/lib/i18n'
import { useTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { NAV, PRIMARY } from './nav'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-cyan shadow-lg shadow-electric/30">
        <Sparkles className="size-4.5 text-white" aria-hidden />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-sm font-semibold">BlendEd</span>
        <span className="block text-[10px] uppercase tracking-[0.2em] opacity-70">Research 2026</span>
      </span>
    </span>
  )
}

export function SiteHeader() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const primary = NAV.filter((n) => PRIMARY.includes(n.to))
  const more = NAV.filter((n) => !PRIMARY.includes(n.to) && n.to !== '/')
  const moreActive = more.some((n) => n.to === pathname)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 text-white transition-all duration-300',
        scrolled ? 'border-b border-white/10 bg-navy/85 shadow-lg shadow-black/10 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-content items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="shrink-0 rounded-lg focus-visible:ring-2 focus-visible:ring-cyan" aria-label="BlendEd — home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="ml-4 hidden items-center gap-0.5 xl:flex">
          {primary.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-1.5 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              activeProps={{ className: 'bg-white/12 !text-white' }}
            >
              {t(item.label)}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                'flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-white/75 outline-none transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan',
                moreActive && 'bg-white/12 text-white',
              )}
            >
              {t('nav.more')} <ChevronDown className="size-3.5" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {more.map((item) => (
                <DropdownMenuItem key={item.to} asChild>
                  <Link to={item.to} className="flex items-center gap-2">
                    <item.icon className="size-4 text-primary" aria-hidden />
                    {t(item.label)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label={t('lang.choose')}
              className="flex h-9 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 text-xs font-semibold outline-none transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <Globe className="size-3.5" aria-hidden />
              {LANGS.find((l) => l.code === lang)?.short}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LANGS.map((l) => (
                <DropdownMenuItem key={l.code} onSelect={() => setLang(l.code)} className="justify-between gap-6">
                  {l.label}
                  {l.code === lang ? <Check className="size-4 text-primary" aria-hidden /> : null}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            type="button"
            onClick={toggle}
            aria-label={t('theme.toggle')}
            className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/5 outline-none transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-cyan"
          >
            {theme === 'dark' ? <Sun className="size-4" aria-hidden /> : <Moon className="size-4" aria-hidden />}
          </button>

          <Button asChild size="sm" className="ml-1 hidden rounded-full bg-white text-navy hover:bg-white/90 sm:inline-flex">
            <Link to="/survey">{t('nav.survey')}</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={t('nav.menu')}
              className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/5 outline-none hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-cyan xl:hidden"
            >
              <Menu className="size-4.5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
              <SheetHeader className="border-b p-5">
                <SheetTitle className="font-display">{t('common.shortTitle')}</SheetTitle>
                <SheetDescription>{t('common.project')}</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="space-y-5 p-4">
                {(['nav.project', 'nav.learn', 'nav.practice'] as const).map((group) => (
                  <div key={group}>
                    <p className="px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t(group)}
                    </p>
                    <ul className="space-y-0.5">
                      {NAV.filter((n) => n.group === group).map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                            activeProps={{ className: 'bg-accent text-primary' }}
                            activeOptions={{ exact: true }}
                          >
                            <item.icon className="size-4.5 text-primary" aria-hidden />
                            {t(item.label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
