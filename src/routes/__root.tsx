import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { NotFoundPage } from '@/components/error-pages'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { LanguageProvider } from '@/lib/i18n'
import { ThemeProvider, themeScript } from '@/lib/theme'

import '../styles.css'

const siteName = 'Blended Learning — Grade 10 Research Project'
const siteDescription =
  'Blended Learning: Combining Classroom Lessons with Online Platforms — Is It the Most Effective Way? An interactive research platform by Alikhan Kabidenov, Grade 10, MMGI, 2026.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { name: 'theme-color', content: '#0b1533' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Unbounded:wght@500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundPage,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <TooltipProvider>
              <SiteHeader />
              <main id="main" className="min-h-svh">
                {children}
              </main>
              <SiteFooter />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Toaster />
        <Scripts />
      </body>
    </html>
  )
}
