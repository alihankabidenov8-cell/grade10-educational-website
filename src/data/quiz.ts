export type QuizQuestion = {
  question: string
  options: [string, string, string, string]
  answer: 0 | 1 | 2 | 3
  explanation: string
}

export const QUIZ: QuizQuestion[] = [
  {
    question: 'What is blended learning?',
    options: [
      'Learning only through online courses',
      'A combination of face-to-face classroom teaching and online learning',
      'Learning several subjects in one lesson',
      'Studying without a teacher',
    ],
    answer: 1,
    explanation:
      'Blended learning combines traditional face-to-face lessons with online learning activities, so students benefit from both.',
  },
  {
    question: 'In a “flipped classroom”, what do students usually do at home?',
    options: [
      'Nothing — all work happens at school',
      'Only write long essays',
      'Watch video lessons or read new material online',
      'Take the final exam',
    ],
    answer: 2,
    explanation:
      'In a flipped classroom, students study new material at home (often through videos), and class time is used for practice and discussion.',
  },
  {
    question: 'Which of these is an example of a Learning Management System (LMS)?',
    options: ['Google Classroom', 'A paper notebook', 'A school bell', 'A printed timetable'],
    answer: 0,
    explanation:
      'An LMS is an online platform for sharing materials, assignments and grades. Google Classroom and Moodle are common examples.',
  },
  {
    question: 'Which is a main advantage of blended learning?',
    options: [
      'Students never need to talk to each other',
      'Teachers no longer need to plan lessons',
      'It removes the need for any technology',
      'Students can learn at their own pace and review materials when needed',
    ],
    answer: 3,
    explanation:
      'Online materials can be watched or reviewed many times, so students control their pace while still getting classroom support.',
  },
  {
    question: 'What is a common challenge of blended learning?',
    options: [
      'Too much face-to-face contact',
      'Unequal access to devices and a stable internet connection',
      'Lessons become too short',
      'Students learn too quickly',
    ],
    answer: 1,
    explanation:
      'The “digital divide” — when some students do not have devices or good internet — is one of the main challenges of blended learning.',
  },
  {
    question: 'What is the role of the teacher in blended learning?',
    options: [
      'The teacher is replaced by a computer',
      'The teacher only checks attendance',
      'The teacher guides, supports and organizes both classroom and online learning',
      'The teacher only works online',
    ],
    answer: 2,
    explanation:
      'In blended learning the teacher becomes a facilitator: planning activities, guiding discussion and supporting students online and offline.',
  },
  {
    question: 'What does “digital literacy” mean?',
    options: [
      'The ability to find, evaluate and use information with digital technologies',
      'Reading books on paper',
      'Knowing how to type very fast',
      'Owning many digital devices',
    ],
    answer: 0,
    explanation:
      'Digital literacy is the set of skills needed to use digital tools safely and effectively — including finding and evaluating information.',
  },
  {
    question: 'Which skill is especially important for students in blended learning?',
    options: ['Memorizing timetables', 'Self-discipline and time management', 'Drawing', 'Running fast'],
    answer: 1,
    explanation:
      'Online parts of a course need students to organize their own time and work independently, so self-discipline is key.',
  },
  {
    question: 'What is “personalized learning”?',
    options: [
      'Every student receives exactly the same tasks',
      'Learning only alone at home',
      'Learning with a personal tutor only',
      'Adapting the pace, tasks and support to each student’s needs',
    ],
    answer: 3,
    explanation:
      'Personalized learning adapts content, pace and support to the needs and interests of each learner. Digital tools make this easier.',
  },
  {
    question: 'Which activity is best done face-to-face in the classroom?',
    options: [
      'Watching a recorded lecture',
      'Taking an automatic online quiz',
      'A group debate with live discussion',
      'Downloading a worksheet',
    ],
    answer: 2,
    explanation:
      'Debates and discussions benefit most from live, face-to-face interaction, while videos and quizzes work well online.',
  },
  {
    question: 'What does “student engagement” refer to?',
    options: [
      'The level of attention, interest and active participation of students',
      'The number of students in a class',
      'The age of students',
      'The school uniform',
    ],
    answer: 0,
    explanation:
      'Student engagement describes how actively involved, interested and motivated students are in their learning.',
  },
  {
    question: 'In the “station rotation” model, students…',
    options: [
      'stay at one desk all day',
      'only study online at home',
      'change schools every term',
      'move between stations, including at least one online learning station',
    ],
    answer: 3,
    explanation:
      'In station rotation, students rotate between activities — for example teacher-led instruction, group work and an online station.',
  },
  {
    question: 'Why can instant feedback in online quizzes help learning?',
    options: [
      'Students immediately see mistakes and can correct their understanding',
      'It makes the test longer',
      'It hides the correct answers',
      'It replaces all homework',
    ],
    answer: 0,
    explanation:
      'Immediate feedback shows students what they got wrong while the question is still fresh, helping them correct misunderstandings.',
  },
  {
    question: 'What is a research hypothesis?',
    options: [
      'The final proven result of a study',
      'A list of sources',
      'A testable assumption that the research will check',
      'The title of the project',
    ],
    answer: 2,
    explanation:
      'A hypothesis is a testable prediction. Research is carried out to check whether it is supported or not.',
  },
  {
    question: 'Which factor most influences the success of blended learning?',
    options: [
      'The colour of the classroom walls',
      'Good lesson design, teacher support and student access to technology',
      'The number of computers in the teacher’s home',
      'Having lessons only in the morning',
    ],
    answer: 1,
    explanation:
      'Blended learning works best when lessons are carefully designed, teachers support students, and everyone has access to the necessary technology.',
  },
]
