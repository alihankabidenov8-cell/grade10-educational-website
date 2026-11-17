export type Term = {
  term: string
  ru: string
  kk: string
  definition: string
  example: string
  icon: 'blend' | 'school' | 'globe' | 'cpu' | 'flame' | 'user' | 'layout' | 'sparkles' | 'compass' | 'split'
}

export const TERMS: Term[] = [
  {
    term: 'Blended Learning',
    ru: 'Смешанное обучение',
    kk: 'Аралас оқыту',
    icon: 'blend',
    definition:
      'An educational approach that combines face-to-face classroom teaching with online learning, in which the student has some control over time, place, path or pace.',
    example: 'Students watch a short video at home, then discuss it and solve problems together in class.',
  },
  {
    term: 'Traditional Learning',
    ru: 'Традиционное обучение',
    kk: 'Дәстүрлі оқыту',
    icon: 'school',
    definition:
      'Teacher-centred learning that takes place in a physical classroom at a fixed time, mainly through explanation, textbooks and written exercises.',
    example: 'A teacher explains grammar on the board and students complete exercises in their notebooks.',
  },
  {
    term: 'Online Learning',
    ru: 'Онлайн-обучение',
    kk: 'Онлайн оқыту',
    icon: 'globe',
    definition:
      'Learning that takes place through the internet, using digital materials, video lessons, online tests and virtual communication.',
    example: 'A student completes an online course with video lectures and automatically graded quizzes.',
  },
  {
    term: 'Digital Literacy',
    ru: 'Цифровая грамотность',
    kk: 'Цифрлық сауаттылық',
    icon: 'cpu',
    definition:
      'The ability to find, evaluate, create and communicate information safely and responsibly using digital technologies.',
    example: 'Checking whether a website is a reliable source before using it in a project.',
  },
  {
    term: 'Student Engagement',
    ru: 'Вовлечённость учащихся',
    kk: 'Оқушылардың белсенділігі',
    icon: 'flame',
    definition:
      'The degree of attention, curiosity, interest and active participation that students show in their learning.',
    example: 'Students eagerly answer questions in an interactive class quiz.',
  },
  {
    term: 'Personalized Learning',
    ru: 'Персонализированное обучение',
    kk: 'Жекелендірілген оқыту',
    icon: 'user',
    definition:
      'An approach where the pace, content and support are adapted to the needs, abilities and interests of each learner.',
    example: 'An online platform gives extra practice on the topics a student finds difficult.',
  },
  {
    term: 'Learning Management System (LMS)',
    ru: 'Система управления обучением (LMS)',
    kk: 'Оқуды басқару жүйесі (LMS)',
    icon: 'layout',
    definition:
      'Software used to deliver, organize and track learning: materials, assignments, tests, grades and communication in one place.',
    example: 'Google Classroom and Moodle are examples of learning management systems.',
  },
  {
    term: 'Educational Technology (EdTech)',
    ru: 'Образовательные технологии',
    kk: 'Білім беру технологиялары',
    icon: 'sparkles',
    definition:
      'The use of digital tools, software and devices to support and improve teaching and learning.',
    example: 'Interactive whiteboards, learning apps and online quizzes are forms of EdTech.',
  },
  {
    term: 'Self-directed Learning',
    ru: 'Самостоятельное обучение',
    kk: 'Өзіндік оқу',
    icon: 'compass',
    definition:
      'A process in which learners take responsibility for their own learning: setting goals, finding resources and evaluating their progress.',
    example: 'A student plans a weekly schedule to finish online vocabulary lessons before the test.',
  },
  {
    term: 'Hybrid Education',
    ru: 'Гибридное образование',
    kk: 'Гибридті білім беру',
    icon: 'split',
    definition:
      'A model in which some students attend lessons in person while others join the same lessons remotely at the same time, or where learning alternates between school and home.',
    example: 'Half of the class is in the classroom while the other half joins the lesson by video call.',
  },
]
