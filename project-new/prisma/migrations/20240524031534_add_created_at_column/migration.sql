/*
  Warnings:

  - You are about to drop the column `authorId` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `discipline` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `discipline` on the `Professors` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createAt` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disciplineId` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createAt` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviewsId` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usersId` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disciplineId` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Professors` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Discipline" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "creatAt" DATETIME NOT NULL,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_ProfessorsToReviews" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProfessorsToReviews_A_fkey" FOREIGN KEY ("A") REFERENCES "Professors" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProfessorsToReviews_B_fkey" FOREIGN KEY ("B") REFERENCES "Reviews" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DisciplineToReviews" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DisciplineToReviews_A_fkey" FOREIGN KEY ("A") REFERENCES "Discipline" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DisciplineToReviews_B_fkey" FOREIGN KEY ("B") REFERENCES "Reviews" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "course" TEXT,
    "department" TEXT,
    "createdAt" DATETIME NOT NULL,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Users" ("course", "department", "email", "id", "name", "password") SELECT "course", "department", "email", "id", "name", "password" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
CREATE TABLE "new_Reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "professorId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Reviews" ("content", "id", "professorId") SELECT "content", "id", "professorId" FROM "Reviews";
DROP TABLE "Reviews";
ALTER TABLE "new_Reviews" RENAME TO "Reviews";
CREATE TABLE "new_Comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usersId" INTEGER NOT NULL,
    "reviewsId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Comments_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Comments_reviewsId_fkey" FOREIGN KEY ("reviewsId") REFERENCES "Reviews" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Comments" ("content", "id") SELECT "content", "id" FROM "Comments";
DROP TABLE "Comments";
ALTER TABLE "new_Comments" RENAME TO "Comments";
CREATE TABLE "new_Professors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "disciplineId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Professors_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Professors" ("department", "id", "name") SELECT "department", "id", "name" FROM "Professors";
DROP TABLE "Professors";
ALTER TABLE "new_Professors" RENAME TO "Professors";
PRAGMA foreign_key_check("Users");
PRAGMA foreign_key_check("Reviews");
PRAGMA foreign_key_check("Comments");
PRAGMA foreign_key_check("Professors");
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ProfessorsToReviews_AB_unique" ON "_ProfessorsToReviews"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfessorsToReviews_B_index" ON "_ProfessorsToReviews"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DisciplineToReviews_AB_unique" ON "_DisciplineToReviews"("A", "B");

-- CreateIndex
CREATE INDEX "_DisciplineToReviews_B_index" ON "_DisciplineToReviews"("B");
