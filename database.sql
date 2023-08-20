CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(255),
	"duedate" DATE,
    "complete" BOOLEAN
);

INSERT INTO "tasks" ("name", "duedate", "complete") 
VALUES ('wash clothes', '2023-12-12', false), ('feed dog', '2023-10-20', false), ('pay taxes', '2023-03-17', false);