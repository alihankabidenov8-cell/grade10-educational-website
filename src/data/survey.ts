import type { L } from '@/lib/i18n'

export type SurveyQuestion = {
  id: string
  question: L
  options: { id: string; label: L }[]
}

/**
 * Shared by the survey form (client) and the /api/survey route (server),
 * so the server can validate every answer against these ids.
 */
export const SURVEY: SurveyQuestion[] = [
  {
    id: 'q1',
    question: {
      en: 'How often do you use online platforms for studying?',
      ru: 'Как часто вы используете онлайн-платформы для учёбы?',
      kk: 'Оқу үшін онлайн платформаларды қаншалықты жиі қолданасыз?',
    },
    options: [
      { id: 'daily', label: { en: 'Every day', ru: 'Каждый день', kk: 'Күн сайын' } },
      { id: 'weekly', label: { en: 'Several times a week', ru: 'Несколько раз в неделю', kk: 'Аптасына бірнеше рет' } },
      { id: 'rarely', label: { en: 'Rarely', ru: 'Редко', kk: 'Сирек' } },
      { id: 'never', label: { en: 'Never', ru: 'Никогда', kk: 'Ешқашан' } },
    ],
  },
  {
    id: 'q2',
    question: {
      en: 'Which format helps you understand new material best?',
      ru: 'Какой формат лучше всего помогает вам понять новый материал?',
      kk: 'Жаңа материалды түсінуге қай формат ең жақсы көмектеседі?',
    },
    options: [
      { id: 'classroom', label: { en: 'Classroom lessons only', ru: 'Только уроки в классе', kk: 'Тек сыныптағы сабақтар' } },
      { id: 'online', label: { en: 'Online learning only', ru: 'Только онлайн-обучение', kk: 'Тек онлайн оқыту' } },
      { id: 'blended', label: { en: 'A combination of both', ru: 'Сочетание обоих', kk: 'Екеуінің үйлесімі' } },
      { id: 'unsure', label: { en: 'Not sure', ru: 'Не уверен(а)', kk: 'Сенімді емеспін' } },
    ],
  },
  {
    id: 'q3',
    question: {
      en: 'Which online tool do you use most for learning?',
      ru: 'Каким онлайн-инструментом вы пользуетесь для учёбы чаще всего?',
      kk: 'Оқу үшін қай онлайн құралды жиі қолданасыз?',
    },
    options: [
      { id: 'video', label: { en: 'Video lessons', ru: 'Видеоуроки', kk: 'Бейнесабақтар' } },
      { id: 'tests', label: { en: 'Online tests and quizzes', ru: 'Онлайн-тесты и викторины', kk: 'Онлайн тесттер мен викториналар' } },
      { id: 'books', label: { en: 'Digital textbooks and articles', ru: 'Электронные учебники и статьи', kk: 'Электронды оқулықтар мен мақалалар' } },
      { id: 'apps', label: { en: 'Educational apps', ru: 'Образовательные приложения', kk: 'Білім беру қосымшалары' } },
    ],
  },
  {
    id: 'q4',
    question: {
      en: 'Do online activities make lessons more interesting for you?',
      ru: 'Делают ли онлайн-задания уроки интереснее для вас?',
      kk: 'Онлайн тапсырмалар сабақты сіз үшін қызықтырақ ете ме?',
    },
    options: [
      { id: 'yes_lot', label: { en: 'Yes, a lot', ru: 'Да, намного', kk: 'Иә, едәуір' } },
      { id: 'somewhat', label: { en: 'Somewhat', ru: 'Отчасти', kk: 'Біршама' } },
      { id: 'not_really', label: { en: 'Not really', ru: 'Не особо', kk: 'Онша емес' } },
      { id: 'no', label: { en: 'No', ru: 'Нет', kk: 'Жоқ' } },
    ],
  },
  {
    id: 'q5',
    question: {
      en: 'What is the biggest challenge of online learning for you?',
      ru: 'Какая самая большая трудность онлайн-обучения для вас?',
      kk: 'Сіз үшін онлайн оқытудың ең үлкен қиындығы қандай?',
    },
    options: [
      { id: 'tech', label: { en: 'Internet or device problems', ru: 'Проблемы с интернетом или устройством', kk: 'Интернет немесе құрылғы мәселелері' } },
      { id: 'focus', label: { en: 'Staying focused', ru: 'Трудно сосредоточиться', kk: 'Зейін қоюдың қиындығы' } },
      { id: 'support', label: { en: 'Lack of teacher support', ru: 'Недостаток поддержки учителя', kk: 'Мұғалім қолдауының жетіспеушілігі' } },
      { id: 'none', label: { en: 'No serious challenges', ru: 'Серьёзных трудностей нет', kk: 'Елеулі қиындық жоқ' } },
    ],
  },
  {
    id: 'q6',
    question: {
      en: 'How important is face-to-face communication with your teacher?',
      ru: 'Насколько важно для вас личное общение с учителем?',
      kk: 'Мұғаліммен бетпе-бет қарым-қатынас сіз үшін қаншалықты маңызды?',
    },
    options: [
      { id: 'very', label: { en: 'Very important', ru: 'Очень важно', kk: 'Өте маңызды' } },
      { id: 'important', label: { en: 'Important', ru: 'Важно', kk: 'Маңызды' } },
      { id: 'little', label: { en: 'Not very important', ru: 'Не очень важно', kk: 'Онша маңызды емес' } },
      { id: 'not', label: { en: 'Not important', ru: 'Не важно', kk: 'Маңызды емес' } },
    ],
  },
  {
    id: 'q7',
    question: {
      en: 'Can you study independently using online materials?',
      ru: 'Можете ли вы учиться самостоятельно по онлайн-материалам?',
      kk: 'Онлайн материалдар арқылы өз бетіңізше оқи аласыз ба?',
    },
    options: [
      { id: 'easily', label: { en: 'Yes, easily', ru: 'Да, легко', kk: 'Иә, оңай' } },
      { id: 'some_help', label: { en: 'Yes, with some help', ru: 'Да, с небольшой помощью', kk: 'Иә, аздаған көмекпен' } },
      { id: 'difficult', label: { en: 'Only with difficulty', ru: 'Только с трудом', kk: 'Тек қиындықпен' } },
      { id: 'no', label: { en: 'No', ru: 'Нет', kk: 'Жоқ' } },
    ],
  },
  {
    id: 'q8',
    question: {
      en: 'Do you think blended learning is the most effective way to learn?',
      ru: 'Считаете ли вы смешанное обучение самым эффективным способом учиться?',
      kk: 'Аралас оқыту — оқудың ең тиімді жолы деп ойлайсыз ба?',
    },
    options: [
      { id: 'yes', label: { en: 'Yes', ru: 'Да', kk: 'Иә' } },
      { id: 'partly', label: { en: 'Partly', ru: 'Частично', kk: 'Ішінара' } },
      { id: 'no', label: { en: 'No', ru: 'Нет', kk: 'Жоқ' } },
      { id: 'unsure', label: { en: 'Not sure', ru: 'Не уверен(а)', kk: 'Сенімді емеспін' } },
    ],
  },
]

export type SurveyStats = {
  total: number
  comments: number
  latest: string | null
  counts: Record<string, Record<string, number>>
}
