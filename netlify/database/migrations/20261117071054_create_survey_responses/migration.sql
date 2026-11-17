CREATE TABLE "survey_responses" (
	"id" serial PRIMARY KEY,
	"answers" jsonb NOT NULL,
	"feedback" text,
	"language" varchar(8),
	"created_at" timestamp DEFAULT now() NOT NULL
);
