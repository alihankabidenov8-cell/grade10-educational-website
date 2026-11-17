import { createFileRoute } from '@tanstack/react-router'
import {
  AlertTriangle,
  BookMarked,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  ListChecks,
  Microscope,
  Target,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  UserRound,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { useI18n } from '@/lib/i18n'

export const Route = createFileRoute('/research')({
  head: () => ({ meta: [{ title: 'About the Research — Blended Learning' }] }),
  component: ResearchPage,
})

const SECTIONS: { id: string; title: string; icon: LucideIcon }[] = [
  { id: 'definition', title: 'Definition', icon: BookMarked },
  { id: 'relevance', title: 'Relevance', icon: TrendingUp },
  { id: 'problem', title: 'Research problem', icon: AlertTriangle },
  { id: 'aim', title: 'Aim and objectives', icon: Target },
  { id: 'hypothesis', title: 'Hypothesis', icon: Lightbulb },
  { id: 'methods', title: 'Methods', icon: Microscope },
  { id: 'expected', title: 'Expected results', icon: ClipboardCheck },
  { id: 'pros-cons', title: 'Advantages & disadvantages', icon: ListChecks },
  { id: 'roles', title: 'Roles of teachers & students', icon: Users },
  { id: 'reading', title: 'Further reading', icon: GraduationCap },
]

function Block({ id, icon: Icon, title, children }: { id: string; icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section">
      <div id={id} className="scroll-mt-24 rounded-3xl border bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary">
            <Icon className="size-5" aria-hidden />
          </span>
          <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
        </div>
        <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground [&_strong]:text-foreground">{children}</div>
      </div>
    </Reveal>
  )
}

function ResearchPage() {
  const { t } = useI18n()
  return (
    <>
      <PageHero icon={FlaskConical} eyebrow={t('common.project')} title={t('research.title')} subtitle={t('research.subtitle')} />
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-24 space-y-1">
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contents</p>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <s.icon className="size-4 text-primary" aria-hidden />
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 space-y-6">
          <p className="text-sm text-muted-foreground">{t('common.contentNote')}</p>

          <Block id="definition" icon={BookMarked} title="Definition of blended learning">
            <p>
              <strong>Blended learning</strong> is a form of education that combines traditional face-to-face classroom lessons with online
              learning. Part of the learning happens in the classroom with the teacher and classmates, and part happens on digital platforms —
              for example video lessons, online exercises, tests and learning management systems.
            </p>
            <p>
              A widely used definition describes blended learning as a programme in which a student learns at least partly online, with some
              element of control over <strong>time, place, path or pace</strong>, and at least partly in a supervised physical location away
              from home (Staker &amp; Horn, 2012). In simple words, it is not “school <em>or</em> internet”, but “school <em>and</em> internet”,
              carefully connected.
            </p>
            <blockquote className="rounded-2xl border-l-4 border-primary bg-accent/60 p-4 text-foreground">
              Blended learning = face-to-face teaching + online learning + a clear connection between them.
            </blockquote>
          </Block>

          <Block id="relevance" icon={TrendingUp} title="Relevance of the research">
            <p>
              Digital technologies have become a normal part of students’ lives. Many schools, including schools in Kazakhstan, use online
              platforms for homework, testing and communication. During the COVID-19 pandemic, schools around the world had to move to distance
              learning, and both teachers and students discovered the strengths and the limits of online education.
            </p>
            <p>
              After returning to classrooms, an important question appeared: <strong>should schools go back to only traditional lessons, or
              combine the best parts of both?</strong> This makes research on blended learning relevant for students, teachers and schools today.
            </p>
          </Block>

          <Block id="problem" icon={AlertTriangle} title="Research problem">
            <p>
              Online platforms are widely available, but they are often used separately from classroom lessons. It is not always clear
              <strong> how classroom teaching and online learning should be combined</strong> so that students understand material better and
              stay motivated. There is also a risk that technology is used only because it is modern, not because it helps learning.
            </p>
            <p>
              <strong>Research question:</strong> Is combining classroom lessons with online platforms the most effective way of learning for
              Grade 10 students, and under what conditions does it work best?
            </p>
          </Block>

          <Block id="aim" icon={Target} title="Aim and objectives">
            <p>
              <strong>Aim:</strong> to study blended learning as a combination of classroom and online education and to evaluate its
              effectiveness from the point of view of students.
            </p>
            <ol className="grid gap-3 sm:grid-cols-2">
              {[
                'To define blended learning and its main models.',
                'To compare traditional, online and blended learning.',
                'To identify the advantages and disadvantages of blended learning.',
                'To create an interactive platform with an example blended English lesson.',
                'To survey students about their experience and opinions.',
                'To analyse the survey results and draw conclusions.',
              ].map((o, i) => (
                <li key={o} className="flex gap-3 rounded-2xl border bg-background p-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary font-display text-xs text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-foreground">{o}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block id="hypothesis" icon={Lightbulb} title="Research hypothesis">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-electric p-6 text-primary-foreground">
              <p className="text-lg font-medium leading-relaxed">
                If classroom lessons are thoughtfully combined with online platforms, students will be more engaged and will understand and
                remember material better than when only one form of learning is used.
              </p>
            </div>
            <p>
              The hypothesis is an assumption to be tested. It will be supported or rejected according to the survey results and analysis — it
              is not a proven fact.
            </p>
          </Block>

          <Block id="methods" icon={Microscope} title="Research methods">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Literature analysis', 'Studying articles and books about blended, online and traditional learning.'],
                ['Comparison', 'Comparing the features of traditional, online and blended learning.'],
                ['Survey (questionnaire)', 'An anonymous 8-question online survey of students on this website.'],
                ['Practical experiment', 'Designing and testing an interactive blended English lesson “Environmental Protection”.'],
                ['Observation', 'Observing how students interact with classroom and online activities.'],
                ['Analysis and generalization', 'Analysing survey data with charts and formulating conclusions.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border bg-background p-4">
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block id="expected" icon={ClipboardCheck} title="Expected results">
            <p>These are expectations at the planning stage, not final findings:</p>
            <ul className="space-y-2">
              {[
                'A clear understanding of what blended learning is and how it works in practice.',
                'A working interactive platform that shows how classroom and online learning can be combined.',
                'Real survey data about students’ opinions and experience with online learning.',
                'Evidence that will support or reject the research hypothesis.',
                'Practical recommendations for students and teachers on using blended learning effectively.',
              ].map((r) => (
                <li key={r} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="pros-cons" icon={ListChecks} title="Advantages and disadvantages">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-success/30 bg-success/5 p-5">
                <p className="flex items-center gap-2 font-semibold text-foreground">
                  <ThumbsUp className="size-5 text-success" aria-hidden /> Advantages
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  <li>Students can learn at their own pace and review materials.</li>
                  <li>Lessons become more varied and interactive.</li>
                  <li>Instant feedback from online tests.</li>
                  <li>Development of digital literacy and independence.</li>
                  <li>Teachers can personalize tasks for different students.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5">
                <p className="flex items-center gap-2 font-semibold text-foreground">
                  <ThumbsDown className="size-5 text-destructive" aria-hidden /> Disadvantages
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  <li>Not all students have devices or a stable internet connection.</li>
                  <li>Online learning requires strong self-discipline.</li>
                  <li>More preparation time for teachers.</li>
                  <li>Too much screen time can be tiring.</li>
                  <li>Risk of distraction by social media and games.</li>
                </ul>
              </div>
            </div>
          </Block>

          <Block id="roles" icon={Users} title="The role of teachers and students">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-background p-5">
                <p className="flex items-center gap-2 font-semibold text-foreground">
                  <GraduationCap className="size-5 text-primary" aria-hidden /> The teacher
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  <li>Designs the lesson and decides which parts happen online and offline.</li>
                  <li>Acts as a guide and facilitator, not only a lecturer.</li>
                  <li>Selects reliable digital resources.</li>
                  <li>Monitors progress and gives feedback.</li>
                  <li>Supports students who need extra help.</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-background p-5">
                <p className="flex items-center gap-2 font-semibold text-foreground">
                  <UserRound className="size-5 text-primary" aria-hidden /> The student
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  <li>Takes responsibility for completing online tasks on time.</li>
                  <li>Prepares for classroom discussion using online materials.</li>
                  <li>Asks questions and collaborates with classmates.</li>
                  <li>Uses technology safely and responsibly.</li>
                  <li>Reflects on their own progress.</li>
                </ul>
              </div>
            </div>
          </Block>

          <Block id="reading" icon={GraduationCap} title="Further reading">
            <p>Publicly known works on blended learning that informed the definitions used in this project:</p>
            <ul className="space-y-3 text-sm">
              <li className="rounded-xl border bg-background p-3">
                Garrison, D. R., &amp; Kanuka, H. (2004). Blended learning: Uncovering its transformative potential in higher education.{' '}
                <em>The Internet and Higher Education, 7</em>(2), 95–105.
              </li>
              <li className="rounded-xl border bg-background p-3">
                Graham, C. R. (2006). Blended learning systems: Definition, current trends, and future directions. In C. J. Bonk &amp; C. R.
                Graham (Eds.), <em>The Handbook of Blended Learning</em>. Pfeiffer.
              </li>
              <li className="rounded-xl border bg-background p-3">
                Staker, H., &amp; Horn, M. B. (2012). <em>Classifying K–12 Blended Learning</em>. Innosight Institute (Clayton Christensen
                Institute).
              </li>
              <li className="rounded-xl border bg-background p-3">
                Horn, M. B., &amp; Staker, H. (2015). <em>Blended: Using Disruptive Innovation to Improve Schools</em>. Jossey-Bass.
              </li>
            </ul>
          </Block>
        </div>
      </div>
    </>
  )
}
