import { Comments, Users } from "@prisma/client";
import { Discipline } from "src/discipline/entities/discipline.entity";
import { Professor } from "src/professors/entities/professor.entity";

export class Review {
  id: number;
  userId: number;
  professorId: number;
  disciplineId: number;
  content: string;
  createAt: Date;
  updateAt: Date;
  user: Users;
  professor: Professor;
  discipline: Discipline;
  comments: Comments;
}
