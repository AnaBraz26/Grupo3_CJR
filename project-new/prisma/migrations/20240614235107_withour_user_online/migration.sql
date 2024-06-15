/*
  Warnings:

  - You are about to drop the `UsersOnline` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UsersOnline";
PRAGMA foreign_keys=on;
