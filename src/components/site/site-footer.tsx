import { Link } from '@tanstack/react-router'
import { useI18n } from '@/lib/i18n'
import { Logo } from './site-header'
import { NAV } from './nav'

export function SiteFooter() {
  const { t } = useI18n()
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-content px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm font-display text-sm leading-relaxed text-white/90">{t('common.title')}</p>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">{t('footer.purpose')}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {(['nav.project', 'nav.learn', 'nav.practice'] as const).map((group) => (
              <div key={group}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{t(group)}</p>
                <ul className="mt-3 space-y-2">
                  {NAV.filter((n) => n.group === group).map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="text-sm text-white/70 transition-colors hover:text-white">
                        {t(item.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {t('author.name')} · 10 “Б” · MMGI · {t('author.regionValue')}
          </p>
          <p>
            {t('footer.rights')} · {t('author.supervisor')}: {t('author.supervisorName')}
          </p>
        </div>
      </div>
    </footer>
  )
}
