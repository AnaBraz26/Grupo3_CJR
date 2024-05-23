/*
  Warnings:

  - Added the required column `department` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discipline` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discipline` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorId` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "discipline" TEXT NOT NULL
);
INSERT INTO "new_Professors" ("id", "name") SELECT "id", "name" FROM "Professors";
DROP TABLE "Professors";
ALTER TABLE "new_Professors" RENAME TO "Professors";
CREATE TABLE "new_Reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "discipline" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "authorId" INTEGER NOT NULL,
    "professorId" INTEGER NOT NULL,
    CONSTRAINT "Reviews_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Reviews_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professors" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Reviews" ("authorId", "content", "id") SELECT "authorId", "content", "id" FROM "Reviews";
DROP TABLE "Reviews";
ALTER TABLE "new_Reviews" RENAME TO "Reviews";
PRAGMA foreign_key_check("Professors");
PRAGMA foreign_key_check("Reviews");
PRAGMA foreign_keys=ON;
