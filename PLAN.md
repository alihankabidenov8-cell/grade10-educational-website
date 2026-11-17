# Build plan — Blended Learning research website

## Done
1. Project setup: TanStack Start + React + TypeScript + Tailwind, navy/electric-blue theme, light/dark mode, EN/RU/KZ language switcher, header (desktop + mobile menu), footer.
2. Home page: animated hero, intro, three feature cards, labelled platform statistics, illustrative weekly example, learning path, survey CTA.
3. About the Research (`/research`).
4. How Blended Learning Works (`/how-it-works`) with interactive animated diagram, lesson timeline, models.
5. Interactive lesson "Environmental Protection" (`/lesson`) with exercises and completion progress.
6. Video lessons (`/videos`) — 11 verified YouTube videos, categories, player dialog, exercises.
7. Student vocabulary (`/vocabulary`) — 33 words, search, filters, flip flashcards, mark as learned.
8. Key research terms (`/terms`).
9. Survey backend: Netlify Database table + migration, `GET/POST /api/survey` (`src/routes/api.survey.ts`); question data in `src/data/survey.ts`.
10. Quiz data (15 questions) in `src/data/quiz.ts`.

## Remaining (these nav links currently 404)
11. `/quiz` page — use `src/data/quiz.ts`: progress bar, instant feedback, explanations, final %, retake, animated results.
12. `/pros-cons` page — interactive advantages/disadvantages cards.
13. `/survey` page — form posting to `/api/survey`, confirmation, results dashboard with charts from the API's `counts`.
14. `/qr` page — `qrcode` package (installed), build URL from `window.location.origin + '/survey'`, Download PNG, copy link, instructions.
15. `/conclusion` and `/author` pages.
16. Verify typecheck/lint and test flows on mobile.
