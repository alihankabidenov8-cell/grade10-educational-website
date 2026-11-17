import {
  BookOpenCheck,
  Brain,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  Home,
  Languages,
  Network,
  QrCode,
  Scale,
  ScrollText,
  UserRound,
  Video,
  type LucideIcon,
} from 'lucide-react'
import type { TKey } from '@/lib/i18n'

export type NavItem = {
  to:
    | '/'
    | '/research'
    | '/how-it-works'
    | '/lesson'
    | '/videos'
    | '/vocabulary'
    | '/terms'
    | '/quiz'
    | '/pros-cons'
    | '/survey'
    | '/qr'
    | '/conclusion'
    | '/author'
  label: TKey
  icon: LucideIcon
  group: 'nav.learn' | 'nav.practice' | 'nav.project'
}

export const NAV: NavItem[] = [
  { to: '/', label: 'nav.home', icon: Home, group: 'nav.project' },
  { to: '/research', label: 'nav.research', icon: FlaskConical, group: 'nav.project' },
  { to: '/how-it-works', label: 'nav.how', icon: Network, group: 'nav.learn' },
  { to: '/lesson', label: 'nav.lesson', icon: BookOpenCheck, group: 'nav.learn' },
  { to: '/videos', label: 'nav.videos', icon: Video, group: 'nav.learn' },
  { to: '/vocabulary', label: 'nav.vocabulary', icon: Languages, group: 'nav.practice' },
  { to: '/terms', label: 'nav.terms', icon: ScrollText, group: 'nav.learn' },
  { to: '/quiz', label: 'nav.quiz', icon: Brain, group: 'nav.practice' },
  { to: '/pros-cons', label: 'nav.proscons', icon: Scale, group: 'nav.learn' },
  { to: '/survey', label: 'nav.survey', icon: ClipboardList, group: 'nav.practice' },
  { to: '/qr', label: 'nav.qr', icon: QrCode, group: 'nav.practice' },
  { to: '/conclusion', label: 'nav.conclusion', icon: GraduationCap, group: 'nav.project' },
  { to: '/author', label: 'nav.author', icon: UserRound, group: 'nav.project' },
]

/** Shown directly in the desktop bar; the rest live in the "More" menu. */
export const PRIMARY: NavItem['to'][] = ['/research', '/how-it-works', '/lesson', '/videos', '/vocabulary', '/quiz', '/survey']
