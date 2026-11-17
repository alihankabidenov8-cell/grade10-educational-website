import * as React from 'react'

export type Lang = 'en' | 'ru' | 'kk'
export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'kk', label: 'Қазақша', short: 'KZ' },
]

/** A string available in all three interface languages. */
export type L = { en: string; ru: string; kk: string }

const dict = {
  // Navigation
  'nav.home': { en: 'Home', ru: 'Главная', kk: 'Басты бет' },
  'nav.research': { en: 'Research', ru: 'Исследование', kk: 'Зерттеу' },
  'nav.how': { en: 'How It Works', ru: 'Как это работает', kk: 'Қалай жұмыс істейді' },
  'nav.lesson': { en: 'Lesson', ru: 'Урок', kk: 'Сабақ' },
  'nav.videos': { en: 'Videos', ru: 'Видео', kk: 'Бейнелер' },
  'nav.vocabulary': { en: 'Vocabulary', ru: 'Словарь', kk: 'Сөздік' },
  'nav.terms': { en: 'Key Terms', ru: 'Ключевые термины', kk: 'Негізгі терминдер' },
  'nav.quiz': { en: 'Quiz', ru: 'Тест', kk: 'Тест' },
  'nav.proscons': { en: 'Pros & Cons', ru: 'Плюсы и минусы', kk: 'Артықшылықтар мен кемшіліктер' },
  'nav.survey': { en: 'Survey', ru: 'Опрос', kk: 'Сауалнама' },
  'nav.qr': { en: 'QR Code', ru: 'QR-код', kk: 'QR-код' },
  'nav.conclusion': { en: 'Conclusion', ru: 'Заключение', kk: 'Қорытынды' },
  'nav.author': { en: 'Author', ru: 'Автор', kk: 'Автор' },
  'nav.more': { en: 'More', ru: 'Ещё', kk: 'Тағы' },
  'nav.menu': { en: 'Menu', ru: 'Меню', kk: 'Мәзір' },
  'nav.learn': { en: 'Learn', ru: 'Учиться', kk: 'Оқу' },
  'nav.practice': { en: 'Practice', ru: 'Практика', kk: 'Тәжірибе' },
  'nav.project': { en: 'Project', ru: 'Проект', kk: 'Жоба' },
  'theme.toggle': { en: 'Toggle light and dark mode', ru: 'Переключить светлую и тёмную тему', kk: 'Жарық және қараңғы тақырыпты ауыстыру' },
  'lang.choose': { en: 'Choose language', ru: 'Выбрать язык', kk: 'Тілді таңдау' },

  // Common
  'common.project': { en: 'Grade 10 Scientific Research Project', ru: 'Научно-исследовательский проект, 10 класс', kk: '10-сынып ғылыми-зерттеу жобасы' },
  'common.title': {
    en: 'Blended Learning: Combining Classroom Lessons with Online Platforms — Is It the Most Effective Way?',
    ru: 'Смешанное обучение: сочетание классных уроков с онлайн-платформами — самый ли это эффективный способ?',
    kk: 'Аралас оқыту: сыныптағы сабақтарды онлайн платформалармен ұштастыру — бұл ең тиімді жол ма?',
  },
  'common.shortTitle': { en: 'Blended Learning', ru: 'Смешанное обучение', kk: 'Аралас оқыту' },
  'common.next': { en: 'Next', ru: 'Далее', kk: 'Келесі' },
  'common.back': { en: 'Back', ru: 'Назад', kk: 'Артқа' },
  'common.check': { en: 'Check answers', ru: 'Проверить ответы', kk: 'Жауаптарды тексеру' },
  'common.reset': { en: 'Reset', ru: 'Сбросить', kk: 'Қайта бастау' },
  'common.correct': { en: 'Correct!', ru: 'Верно!', kk: 'Дұрыс!' },
  'common.incorrect': { en: 'Not quite.', ru: 'Не совсем.', kk: 'Дұрыс емес.' },
  'common.contentNote': {
    en: 'Academic content is presented in English, the working language of this research project.',
    ru: 'Академическое содержание представлено на английском языке — рабочем языке этого проекта.',
    kk: 'Академиялық мазмұн осы жобаның жұмыс тілі — ағылшын тілінде берілген.',
  },

  // Home
  'home.badge': { en: 'Grade 10 Research · MMGI · 2026', ru: 'Исследование 10 класса · MMGI · 2026', kk: '10-сынып зерттеуі · MMGI · 2026' },
  'home.titleA': { en: 'Blended Learning:', ru: 'Смешанное обучение:', kk: 'Аралас оқыту:' },
  'home.titleB': { en: 'where the classroom meets the cloud', ru: 'где класс встречается с онлайн-миром', kk: 'сынып пен онлайн әлем тоғысқан жер' },
  'home.subtitle': {
    en: 'Combining classroom lessons with online platforms — is it the most effective way to learn? Explore the research, try a real blended lesson and share your opinion.',
    ru: 'Сочетание классных уроков с онлайн-платформами — самый ли это эффективный способ учиться? Изучите исследование, пройдите настоящий смешанный урок и поделитесь мнением.',
    kk: 'Сыныптағы сабақтарды онлайн платформалармен ұштастыру — оқудың ең тиімді жолы ма? Зерттеумен танысып, нақты аралас сабақтан өтіп, өз пікіріңізбен бөлісіңіз.',
  },
  'home.start': { en: 'Start Learning', ru: 'Начать обучение', kk: 'Оқуды бастау' },
  'home.explore': { en: 'Explore Research', ru: 'Изучить исследование', kk: 'Зерттеуді қарау' },
  'home.quiz': { en: 'Take the Quiz', ru: 'Пройти тест', kk: 'Тест тапсыру' },
  'home.introTitle': { en: 'What is blended learning?', ru: 'Что такое смешанное обучение?', kk: 'Аралас оқыту деген не?' },
  'home.introText': {
    en: 'Blended learning is an approach where students learn partly in a traditional classroom with a teacher and partly through online platforms — videos, digital exercises, quizzes and learning management systems. The goal is to keep the human connection of the classroom while adding the flexibility and personalization of digital tools.',
    ru: 'Смешанное обучение — это подход, при котором ученики учатся частично в обычном классе с учителем, а частично — с помощью онлайн-платформ: видео, цифровых упражнений, тестов и систем управления обучением. Цель — сохранить живое общение в классе и добавить гибкость и персонализацию цифровых инструментов.',
    kk: 'Аралас оқыту — оқушылар білімді ішінара сыныпта мұғаліммен, ішінара онлайн платформалар арқылы — бейнесабақтар, цифрлық жаттығулар, тесттер мен оқуды басқару жүйелері көмегімен алатын тәсіл. Мақсаты — сыныптағы тікелей қарым-қатынасты сақтай отырып, цифрлық құралдардың икемділігі мен жекелендіруін қосу.',
  },
  'home.featuresTitle': { en: 'Three pillars of blended learning', ru: 'Три опоры смешанного обучения', kk: 'Аралас оқытудың үш тірегі' },
  'home.f1': { en: 'Flexibility', ru: 'Гибкость', kk: 'Икемділік' },
  'home.f1d': {
    en: 'Students can review materials at their own time and pace — before, during or after the lesson.',
    ru: 'Ученики могут повторять материал в удобное время и в своём темпе — до, во время и после урока.',
    kk: 'Оқушылар материалды өзіне ыңғайлы уақытта және өз қарқынымен — сабаққа дейін, сабақ кезінде немесе одан кейін қайталай алады.',
  },
  'home.f2': { en: 'Personalization', ru: 'Персонализация', kk: 'Жекелендіру' },
  'home.f2d': {
    en: 'Online tasks can adapt to each learner, so teachers can give extra support or extra challenge.',
    ru: 'Онлайн-задания можно адаптировать под каждого ученика, давая дополнительную поддержку или более сложные задачи.',
    kk: 'Онлайн тапсырмаларды әр оқушыға бейімдеуге болады, сондықтан мұғалім қосымша қолдау немесе күрделірек тапсырма бере алады.',
  },
  'home.f3': { en: 'Engagement', ru: 'Вовлечённость', kk: 'Белсенділік' },
  'home.f3d': {
    en: 'Videos, quizzes and interactive tasks combined with live discussion keep students active and motivated.',
    ru: 'Видео, тесты и интерактивные задания вместе с живым обсуждением делают учеников активными и мотивированными.',
    kk: 'Бейнелер, тесттер мен интерактивті тапсырмалар тікелей талқылаумен бірге оқушыларды белсенді әрі ынталы етеді.',
  },
  'home.statsTitle': { en: 'This platform in numbers', ru: 'Платформа в цифрах', kk: 'Платформа сандармен' },
  'home.statsNote': {
    en: 'These numbers describe the content of this website, not research findings.',
    ru: 'Эти цифры описывают содержание сайта, а не результаты исследования.',
    kk: 'Бұл сандар зерттеу нәтижелерін емес, сайттың мазмұнын сипаттайды.',
  },
  'home.illustrativeTitle': { en: 'An example of a blended week', ru: 'Пример смешанной недели', kk: 'Аралас аптаның мысалы' },
  'home.illustrative': { en: 'Illustrative example — not measured data', ru: 'Иллюстративный пример — не измеренные данные', kk: 'Көрнекі мысал — өлшенген деректер емес' },
  'home.pathTitle': { en: 'Your learning path', ru: 'Ваш путь обучения', kk: 'Сіздің оқу жолыңыз' },
  'home.pathText': {
    en: 'Follow the platform step by step, just like a real blended course.',
    ru: 'Проходите платформу шаг за шагом, как настоящий смешанный курс.',
    kk: 'Платформадан нақты аралас курс сияқты қадам-қадаммен өтіңіз.',
  },
  'home.ctaTitle': { en: 'Help the research — take the survey', ru: 'Помогите исследованию — пройдите опрос', kk: 'Зерттеуге көмектесіңіз — сауалнамадан өтіңіз' },
  'home.ctaText': {
    en: 'Eight short questions about how you learn. Every response is counted in the live results dashboard.',
    ru: 'Восемь коротких вопросов о том, как вы учитесь. Каждый ответ учитывается в панели результатов.',
    kk: 'Қалай оқитыныңыз туралы сегіз қысқа сұрақ. Әр жауап нәтижелер тақтасында есептеледі.',
  },

  // Page headers
  'research.title': { en: 'About the Research', ru: 'Об исследовании', kk: 'Зерттеу туралы' },
  'research.subtitle': {
    en: 'The scientific basis of the project: problem, aim, hypothesis, methods and expected results.',
    ru: 'Научная основа проекта: проблема, цель, гипотеза, методы и ожидаемые результаты.',
    kk: 'Жобаның ғылыми негізі: мәселе, мақсат, болжам, әдістер және күтілетін нәтижелер.',
  },
  'how.title': { en: 'How Blended Learning Works', ru: 'Как работает смешанное обучение', kk: 'Аралас оқыту қалай жұмыс істейді' },
  'how.subtitle': {
    en: 'Two learning worlds — the classroom and the online platform — connected into one learning experience.',
    ru: 'Два мира обучения — класс и онлайн-платформа — объединены в один учебный процесс.',
    kk: 'Екі оқу әлемі — сынып пен онлайн платформа — бір оқу үдерісіне біріктірілген.',
  },
  'lesson.title': { en: 'Interactive Lesson: Environmental Protection', ru: 'Интерактивный урок: Защита окружающей среды', kk: 'Интерактивті сабақ: Қоршаған ортаны қорғау' },
  'lesson.subtitle': {
    en: 'A complete blended English lesson: classroom introduction, reading, vocabulary, online activities and final discussion.',
    ru: 'Полноценный смешанный урок английского: вступление в классе, чтение, лексика, онлайн-задания и итоговое обсуждение.',
    kk: 'Толық аралас ағылшын тілі сабағы: сыныптағы кіріспе, оқылым, сөздік, онлайн тапсырмалар және қорытынды талқылау.',
  },
  'lesson.progress': { en: 'Lesson progress', ru: 'Прогресс урока', kk: 'Сабақ барысы' },
  'lesson.markDone': { en: 'Mark section complete', ru: 'Отметить раздел пройденным', kk: 'Бөлімді аяқталды деп белгілеу' },
  'lesson.done': { en: 'Completed', ru: 'Пройдено', kk: 'Аяқталды' },
  'lesson.complete': { en: 'Lesson complete! Great work.', ru: 'Урок пройден! Отличная работа.', kk: 'Сабақ аяқталды! Тамаша жұмыс.' },
  'videos.title': { en: 'Video Lessons', ru: 'Видеоуроки', kk: 'Бейнесабақтар' },
  'videos.subtitle': {
    en: 'Real, publicly available educational talks and explainers — each followed by a short exercise.',
    ru: 'Настоящие общедоступные образовательные выступления и ролики — после каждого короткое упражнение.',
    kk: 'Нақты, жалпыға қолжетімді білім беру баяндамалары мен түсіндірме бейнелер — әрқайсысынан кейін қысқа жаттығу.',
  },
  'videos.all': { en: 'All', ru: 'Все', kk: 'Барлығы' },
  'videos.watch': { en: 'Watch & practise', ru: 'Смотреть и практиковаться', kk: 'Көру және жаттығу' },
  'videos.exercise': { en: 'Related exercise', ru: 'Упражнение по видео', kk: 'Бейнеге қатысты жаттығу' },
  'vocab.title': { en: 'Student Vocabulary', ru: 'Словарь ученика', kk: 'Оқушы сөздігі' },
  'vocab.subtitle': {
    en: 'Useful English words with Russian and Kazakh translations, definitions, examples and flashcards.',
    ru: 'Полезные английские слова с переводом на русский и казахский, определениями, примерами и карточками.',
    kk: 'Орыс және қазақ тілдеріне аудармасы, анықтамасы, мысалдары және карточкалары бар пайдалы ағылшын сөздері.',
  },
  'vocab.search': { en: 'Search words, translations or definitions…', ru: 'Поиск слов, переводов или определений…', kk: 'Сөздерді, аудармаларды немесе анықтамаларды іздеу…' },
  'vocab.list': { en: 'Dictionary', ru: 'Словарь', kk: 'Сөздік' },
  'vocab.cards': { en: 'Flashcards', ru: 'Карточки', kk: 'Карточкалар' },
  'vocab.learned': { en: 'Learned', ru: 'Выучено', kk: 'Үйренілді' },
  'vocab.markLearned': { en: 'Mark as learned', ru: 'Отметить выученным', kk: 'Үйрендім деп белгілеу' },
  'vocab.hideLearned': { en: 'Hide learned', ru: 'Скрыть выученные', kk: 'Үйренілгендерді жасыру' },
  'vocab.flip': { en: 'Tap the card to flip', ru: 'Нажмите на карточку, чтобы перевернуть', kk: 'Аудару үшін карточканы басыңыз' },
  'vocab.none': { en: 'No words match your search.', ru: 'Нет слов, соответствующих поиску.', kk: 'Іздеуге сәйкес сөз табылмады.' },
  'vocab.shuffle': { en: 'Shuffle', ru: 'Перемешать', kk: 'Араластыру' },
  'terms.title': { en: 'Key Research Terms', ru: 'Ключевые термины исследования', kk: 'Зерттеудің негізгі терминдері' },
  'terms.subtitle': {
    en: 'Ten essential concepts used throughout this research project.',
    ru: 'Десять основных понятий, используемых в этом исследовании.',
    kk: 'Осы зерттеуде қолданылатын он негізгі ұғым.',
  },
  'quiz.title': { en: 'Interactive Quiz', ru: 'Интерактивный тест', kk: 'Интерактивті тест' },
  'quiz.subtitle': {
    en: '15 questions about blended learning. Instant feedback, explanations and automatic scoring.',
    ru: '15 вопросов о смешанном обучении. Мгновенная обратная связь, объяснения и автоматический подсчёт баллов.',
    kk: 'Аралас оқыту туралы 15 сұрақ. Жедел кері байланыс, түсіндірмелер және автоматты бағалау.',
  },
  'quiz.start': { en: 'Start the quiz', ru: 'Начать тест', kk: 'Тестті бастау' },
  'quiz.question': { en: 'Question', ru: 'Вопрос', kk: 'Сұрақ' },
  'quiz.of': { en: 'of', ru: 'из', kk: '/' },
  'quiz.score': { en: 'Score', ru: 'Баллы', kk: 'Ұпай' },
  'quiz.finish': { en: 'See results', ru: 'Посмотреть результаты', kk: 'Нәтижелерді көру' },
  'quiz.retake': { en: 'Retake quiz', ru: 'Пройти заново', kk: 'Қайта тапсыру' },
  'quiz.review': { en: 'Review your answers', ru: 'Разбор ответов', kk: 'Жауаптарды қарау' },
  'quiz.best': { en: 'Best score on this device', ru: 'Лучший результат на этом устройстве', kk: 'Осы құрылғыдағы ең жақсы нәтиже' },
  'proscons.title': { en: 'Advantages and Disadvantages', ru: 'Преимущества и недостатки', kk: 'Артықшылықтары мен кемшіліктері' },
  'proscons.subtitle': {
    en: 'A balanced look at the benefits and challenges of blended learning — and how to overcome them.',
    ru: 'Взвешенный взгляд на преимущества и трудности смешанного обучения — и как их преодолеть.',
    kk: 'Аралас оқытудың пайдасы мен қиындықтарына және оларды жеңу жолдарына теңгерімді көзқарас.',
  },
  'survey.title': { en: 'Research Survey', ru: 'Исследовательский опрос', kk: 'Зерттеу сауалнамасы' },
  'survey.subtitle': {
    en: 'Eight anonymous questions about how students learn. Your answers help this research project.',
    ru: 'Восемь анонимных вопросов о том, как учатся школьники. Ваши ответы помогают исследованию.',
    kk: 'Оқушылардың қалай оқитыны туралы сегіз анонимді сұрақ. Сіздің жауаптарыңыз зерттеуге көмектеседі.',
  },
  'survey.take': { en: 'Take the survey', ru: 'Пройти опрос', kk: 'Сауалнамадан өту' },
  'survey.results': { en: 'Results dashboard', ru: 'Панель результатов', kk: 'Нәтижелер тақтасы' },
  'survey.feedback': { en: 'Optional written feedback', ru: 'Необязательный письменный отзыв', kk: 'Қосымша жазбаша пікір (міндетті емес)' },
  'survey.feedbackPh': {
    en: 'What do you like or dislike about combining classroom and online learning?',
    ru: 'Что вам нравится или не нравится в сочетании классного и онлайн-обучения?',
    kk: 'Сынып пен онлайн оқытуды ұштастырудың қай жағы ұнайды немесе ұнамайды?',
  },
  'survey.submit': { en: 'Submit response', ru: 'Отправить ответ', kk: 'Жауапты жіберу' },
  'survey.submitting': { en: 'Submitting…', ru: 'Отправка…', kk: 'Жіберілуде…' },
  'survey.answered': { en: 'answered', ru: 'отвечено', kk: 'жауап берілді' },
  'survey.thanks': { en: 'Thank you! Your response was recorded.', ru: 'Спасибо! Ваш ответ сохранён.', kk: 'Рахмет! Жауабыңыз сақталды.' },
  'survey.thanksText': {
    en: 'Your answers were saved anonymously and are now included in the live results.',
    ru: 'Ваши ответы сохранены анонимно и уже учтены в результатах.',
    kk: 'Жауаптарыңыз анонимді түрде сақталып, нәтижелерге қосылды.',
  },
  'survey.another': { en: 'Submit another response', ru: 'Отправить ещё один ответ', kk: 'Тағы бір жауап жіберу' },
  'survey.viewResults': { en: 'View live results', ru: 'Смотреть результаты', kk: 'Нәтижелерді көру' },
  'survey.required': { en: 'Please answer all 8 questions.', ru: 'Пожалуйста, ответьте на все 8 вопросов.', kk: 'Барлық 8 сұраққа жауап беріңіз.' },
  'survey.total': { en: 'Total responses', ru: 'Всего ответов', kk: 'Барлық жауаптар' },
  'survey.comments': { en: 'Written comments', ru: 'Письменные отзывы', kk: 'Жазбаша пікірлер' },
  'survey.latest': { en: 'Latest response', ru: 'Последний ответ', kk: 'Соңғы жауап' },
  'survey.empty': { en: 'No responses yet. Be the first to take the survey!', ru: 'Ответов пока нет. Будьте первым!', kk: 'Әзірге жауап жоқ. Бірінші болыңыз!' },
  'survey.liveNote': {
    en: 'Live counts of real anonymous submissions to this website. They are raw survey data, not final research conclusions.',
    ru: 'Счётчик реальных анонимных ответов на этом сайте. Это необработанные данные опроса, а не итоговые выводы исследования.',
    kk: 'Осы сайтқа жіберілген нақты анонимді жауаптардың саны. Бұл зерттеудің қорытынды тұжырымдары емес, өңделмеген сауалнама деректері.',
  },
  'survey.refresh': { en: 'Refresh', ru: 'Обновить', kk: 'Жаңарту' },
  'survey.error': { en: 'Could not load results.', ru: 'Не удалось загрузить результаты.', kk: 'Нәтижелерді жүктеу мүмкін болмады.' },
  'survey.tryAgain': { en: 'Try again', ru: 'Повторить', kk: 'Қайталау' },
  'qr.title': { en: 'Survey QR Code', ru: 'QR-код опроса', kk: 'Сауалнаманың QR-коды' },
  'qr.subtitle': {
    en: 'Scan with a phone camera to open the live survey instantly.',
    ru: 'Отсканируйте камерой телефона, чтобы сразу открыть опрос.',
    kk: 'Сауалнаманы бірден ашу үшін телефон камерасымен сканерлеңіз.',
  },
  'qr.download': { en: 'Download PNG', ru: 'Скачать PNG', kk: 'PNG жүктеу' },
  'qr.copy': { en: 'Copy survey link', ru: 'Копировать ссылку', kk: 'Сілтемені көшіру' },
  'qr.copied': { en: 'Survey link copied', ru: 'Ссылка скопирована', kk: 'Сілтеме көшірілді' },
  'qr.open': { en: 'Open survey', ru: 'Открыть опрос', kk: 'Сауалнаманы ашу' },
  'qr.print': { en: 'Print', ru: 'Печать', kk: 'Басып шығару' },
  'qr.how': { en: 'Instructions for students', ru: 'Инструкция для учеников', kk: 'Оқушыларға нұсқаулық' },
  'qr.s1': { en: 'Open the camera app on your phone or tablet.', ru: 'Откройте камеру на телефоне или планшете.', kk: 'Телефоныңыздағы немесе планшетіңіздегі камераны ашыңыз.' },
  'qr.s2': { en: 'Point it at the QR code and tap the link that appears.', ru: 'Наведите её на QR-код и нажмите на появившуюся ссылку.', kk: 'Камераны QR-кодқа бағыттап, пайда болған сілтемені басыңыз.' },
  'qr.s3': { en: 'Answer all 8 questions — it takes about 2 minutes.', ru: 'Ответьте на все 8 вопросов — это займёт около 2 минут.', kk: 'Барлық 8 сұраққа жауап беріңіз — шамамен 2 минут.' },
  'qr.s4': { en: 'Press “Submit response”. Your answers stay anonymous.', ru: 'Нажмите «Отправить ответ». Ответы анонимны.', kk: '«Жауапты жіберу» түймесін басыңыз. Жауаптар анонимді.' },
  'conclusion.title': { en: 'Conclusion', ru: 'Заключение', kk: 'Қорытынды' },
  'conclusion.subtitle': {
    en: 'When can blended learning be effective, and what factors influence its success?',
    ru: 'Когда смешанное обучение может быть эффективным и какие факторы влияют на его успех?',
    kk: 'Аралас оқыту қашан тиімді бола алады және оның табысына қандай факторлар әсер етеді?',
  },
  'author.title': { en: 'About the Author', ru: 'Об авторе', kk: 'Автор туралы' },
  'author.subtitle': { en: 'Academic profile of the project author.', ru: 'Академический профиль автора проекта.', kk: 'Жоба авторының академиялық профилі.' },
  'author.grade': { en: 'Grade', ru: 'Класс', kk: 'Сынып' },
  'author.school': { en: 'School', ru: 'Школа', kk: 'Мектеп' },
  'author.supervisor': { en: 'Research supervisor', ru: 'Научный руководитель', kk: 'Ғылыми жетекші' },
  'author.region': { en: 'Region', ru: 'Регион', kk: 'Өңір' },
  'author.year': { en: 'Year', ru: 'Год', kk: 'Жыл' },
  'author.regionValue': { en: 'Abai Region, Kazakhstan', ru: 'Абайская область, Казахстан', kk: 'Абай облысы, Қазақстан' },
  'author.name': { en: 'Alikhan Kabidenov', ru: 'Алихан Кабиденов', kk: 'Әлихан Кабиденов' },
  'author.supervisorName': { en: 'Bulanbayev Serik Zhenisbekuly', ru: 'Буланбаев Серик Женисбекулы', kk: 'Буланбаев Серік Женісбекұлы' },
  'author.role': { en: 'Student researcher', ru: 'Ученик-исследователь', kk: 'Оқушы-зерттеуші' },

  // Footer
  'footer.purpose': {
    en: 'An educational website created for academic purposes as part of a Grade 10 scientific research project. Survey results are anonymous and used only for this research.',
    ru: 'Образовательный сайт, созданный в академических целях в рамках научно-исследовательского проекта 10 класса. Результаты опроса анонимны и используются только для этого исследования.',
    kk: '10-сынып ғылыми-зерттеу жобасы аясында академиялық мақсатта жасалған білім беру сайты. Сауалнама нәтижелері анонимді және тек осы зерттеу үшін қолданылады.',
  },
  'footer.rights': { en: 'Academic research project', ru: 'Академический исследовательский проект', kk: 'Академиялық зерттеу жобасы' },
} satisfies Record<string, L>

export type TKey = keyof typeof dict

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string; tl: (v: L) => string }
const LangContext = React.createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>('en')

  React.useEffect(() => {
    const saved = localStorage.getItem('bl-lang')
    if (saved === 'en' || saved === 'ru' || saved === 'kk') setLangState(saved)
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = lang === 'kk' ? 'kk' : lang
  }, [lang])

  const value = React.useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l)
        localStorage.setItem('bl-lang', l)
      },
      t: (k) => dict[k][lang],
      tl: (v) => v[lang],
    }),
    [lang],
  )
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useI18n() {
  const ctx = React.useContext(LangContext)
  if (!ctx) throw new Error('useI18n must be used inside LanguageProvider')
  return ctx
}
