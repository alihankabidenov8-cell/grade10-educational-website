export type VideoCategory = 'education' | 'learning' | 'environment'

export type VideoExercise = {
  question: string
  options: string[]
  answer: number
}

export type Video = {
  id: string // real YouTube video id (verified via YouTube oEmbed)
  title: string
  channel: string
  category: VideoCategory
  description: string
  exercises: VideoExercise[]
  reflection: string
}

export const VIDEO_CATEGORIES: { id: VideoCategory; label: { en: string; ru: string; kk: string } }[] = [
  { id: 'education', label: { en: 'Future of Education', ru: 'Будущее образования', kk: 'Білім беру болашағы' } },
  { id: 'learning', label: { en: 'Learning Skills', ru: 'Навыки обучения', kk: 'Оқу дағдылары' } },
  { id: 'environment', label: { en: 'Environment (Lesson)', ru: 'Экология (урок)', kk: 'Экология (сабақ)' } },
]

export const VIDEOS: Video[] = [
  {
    id: 'gM95HHI4gLk',
    title: 'Let’s use video to reinvent education',
    channel: 'Salman Khan · TED 2011 (Khan Academy)',
    category: 'education',
    description:
      'The founder of Khan Academy explains how short online videos let students learn at their own pace at home, so that class time can be used for practice and help from the teacher — a key idea behind blended learning.',
    exercises: [
      {
        question: 'What idea does Salman Khan describe for using class time?',
        options: [
          'Students watch lectures in class and do homework alone',
          'Students watch videos at home and use class time for practice with teacher support',
          'Classes should be cancelled',
        ],
        answer: 1,
      },
      {
        question: 'Why can videos help students who need more time?',
        options: ['They can pause and re-watch without embarrassment', 'Videos are always shorter than lessons', 'Videos give automatic grades'],
        answer: 0,
      },
    ],
    reflection: 'Would you like your class to “flip” some lessons? Which subject and why?',
  },
  {
    id: 'U6FvJ6jMGHU',
    title: 'What we’re learning from online education',
    channel: 'Daphne Koller · TED',
    category: 'education',
    description:
      'A co-founder of Coursera describes how universities began offering free online courses to millions of people, and what online data reveals about how students learn.',
    exercises: [
      {
        question: 'What kind of platform does Daphne Koller talk about?',
        options: ['A social network for games', 'Online courses from universities, available to many people', 'A school timetable app'],
        answer: 1,
      },
      {
        question: 'Which feature of online courses helps students check their understanding?',
        options: ['Regular interactive exercises with feedback', 'Long printed textbooks', 'Having no assignments'],
        answer: 0,
      },
    ],
    reflection: 'Which online course would you take if it were free? How would you combine it with school lessons?',
  },
  {
    id: 'zDZFcDGpL4U',
    title: 'RSA ANIMATE: Changing Education Paradigms',
    channel: 'Sir Ken Robinson · Royal Society of Arts',
    category: 'education',
    description:
      'An animated talk arguing that traditional school systems were designed for a different era, and that education needs to change to develop creativity and divergent thinking.',
    exercises: [
      {
        question: 'According to the talk, when were many modern school systems designed?',
        options: ['In the age of the internet', 'In the age of the industrial revolution', 'In the last five years'],
        answer: 1,
      },
      {
        question: 'What is “divergent thinking”?',
        options: ['Finding many possible answers to a question', 'Memorizing one correct answer', 'Thinking only about mathematics'],
        answer: 0,
      },
    ],
    reflection: 'How could online tools help schools encourage creativity?',
  },
  {
    id: 'iG9CE55wbtY',
    title: 'Do schools kill creativity?',
    channel: 'Sir Ken Robinson · TED',
    category: 'education',
    description:
      'One of the most watched TED talks. Ken Robinson argues that creativity is as important in education as literacy and that schools should help every student develop their talents.',
    exercises: [
      {
        question: 'What does Ken Robinson say creativity is as important as?',
        options: ['Sport', 'Literacy', 'Homework'],
        answer: 1,
      },
      {
        question: 'What is his attitude towards making mistakes?',
        options: ['If you are not prepared to be wrong, you will not come up with anything original', 'Mistakes should always be punished', 'Mistakes do not matter in school'],
        answer: 0,
      },
    ],
    reflection: 'Describe one creative project that could combine classroom work and online tools.',
  },
  {
    id: 'O96fE1E-rf8',
    title: 'Learning how to learn',
    channel: 'Barbara Oakley · TEDxOaklandUniversity',
    category: 'learning',
    description:
      'An engineering professor explains two modes of thinking — focused and diffuse — and practical techniques to beat procrastination. Her ideas became one of the most popular online courses in the world.',
    exercises: [
      {
        question: 'What are the two modes of thinking described in the talk?',
        options: ['Fast and slow', 'Focused and diffuse', 'Online and offline'],
        answer: 1,
      },
      {
        question: 'Which technique is suggested to fight procrastination?',
        options: ['Work in short, focused time blocks (e.g. 25 minutes), then rest', 'Study all night before an exam', 'Never take breaks'],
        answer: 0,
      },
    ],
    reflection: 'Which of these techniques could you use when you study online at home?',
  },
  {
    id: '5MgBikgcWnY',
    title: 'The first 20 hours — how to learn anything',
    channel: 'Josh Kaufman · TEDxCSU',
    category: 'learning',
    description:
      'Josh Kaufman argues that you can learn the basics of a new skill with about 20 hours of focused, deliberate practice, and shares steps for rapid skill acquisition.',
    exercises: [
      {
        question: 'How many hours of practice does Kaufman suggest for learning the basics of a new skill?',
        options: ['10,000 hours', 'About 20 hours', '2 hours'],
        answer: 1,
      },
      {
        question: 'Which is one of his steps?',
        options: ['Deconstruct the skill into smaller parts', 'Practise without any plan', 'Wait until you feel ready'],
        answer: 0,
      },
    ],
    reflection: 'What new skill would you like to learn with online resources in 20 hours?',
  },
  {
    id: '_X0mgOOSpLU',
    title: 'The power of believing that you can improve',
    channel: 'Carol Dweck · TED',
    category: 'learning',
    description:
      'Psychologist Carol Dweck explains the “growth mindset” — the belief that abilities can be developed — and the power of the word “yet”.',
    exercises: [
      {
        question: 'What is a “growth mindset”?',
        options: ['Believing that abilities are fixed', 'Believing that abilities can grow through effort and learning', 'Believing that only grades matter'],
        answer: 1,
      },
      {
        question: 'Which phrase does Carol Dweck highlight?',
        options: ['“Not yet”', '“Never”', '“Too late”'],
        answer: 0,
      },
    ],
    reflection: 'How can instant feedback in online quizzes support a growth mindset?',
  },
  {
    id: 'H14bBuluwB8',
    title: 'Grit: the power of passion and perseverance',
    channel: 'Angela Lee Duckworth · TED',
    category: 'learning',
    description:
      'A former teacher turned psychologist explains why “grit” — passion and perseverance for long-term goals — can matter for success in learning.',
    exercises: [
      {
        question: 'How does Angela Duckworth describe grit?',
        options: ['Passion and perseverance for very long-term goals', 'Being the smartest in class', 'Working only when it is easy'],
        answer: 0,
      },
      {
        question: 'What was her job before she became a psychologist?',
        options: ['Doctor', 'Mathematics teacher', 'Engineer'],
        answer: 1,
      },
    ],
    reflection: 'Why is perseverance important when you study independently online?',
  },
  {
    id: 'G4H1N_yXBiA',
    title: 'Causes and Effects of Climate Change',
    channel: 'National Geographic',
    category: 'environment',
    description:
      'A clear introduction to how greenhouse gases warm our planet and what effects climate change has on people and nature. Used in the “Environmental Protection” lesson.',
    exercises: [
      {
        question: 'What do greenhouse gases do?',
        options: ['Trap heat in the Earth’s atmosphere', 'Make the ocean colder', 'Protect forests from fires'],
        answer: 0,
      },
      {
        question: 'Which human activity releases a lot of greenhouse gases?',
        options: ['Planting trees', 'Burning fossil fuels such as coal, oil and gas', 'Recycling paper'],
        answer: 1,
      },
    ],
    reflection: 'Name two effects of climate change that could affect Kazakhstan.',
  },
  {
    id: 'RS7IzU2VJIQ',
    title: 'Plastic Pollution: How Humans are Turning the World into Plastic',
    channel: 'Kurzgesagt – In a Nutshell',
    category: 'environment',
    description:
      'An animated explainer about how much plastic humans produce, where it ends up and why it is a problem for oceans and wildlife.',
    exercises: [
      {
        question: 'Where does a lot of plastic waste end up?',
        options: ['In the oceans and the environment', 'Only in recycling factories', 'In space'],
        answer: 0,
      },
      {
        question: 'Why is plastic a long-term problem?',
        options: ['It disappears in a few days', 'It takes a very long time to break down', 'It turns into clean water'],
        answer: 1,
      },
    ],
    reflection: 'Suggest three ways your school could use less plastic.',
  },
  {
    id: 'ipVxxxqwBQw',
    title: 'Who Is Responsible For Climate Change? – Who Needs To Fix It?',
    channel: 'Kurzgesagt – In a Nutshell',
    category: 'environment',
    description:
      'An animated video that looks at which countries and activities produce greenhouse gas emissions and asks who should take action to solve the problem.',
    exercises: [
      {
        question: 'What is the main question of this video?',
        options: ['Who is responsible for climate change and who should fix it', 'How to build a rocket', 'Why the sky is blue'],
        answer: 0,
      },
      {
        question: 'Climate change is…',
        options: ['a problem for one country only', 'a global problem that needs cooperation', 'not connected to human activity'],
        answer: 1,
      },
    ],
    reflection: 'What can young people personally do to reduce emissions?',
  },
]
