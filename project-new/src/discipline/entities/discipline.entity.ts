import { Professors, Reviews } from "@prisma/client";

export class Discipline {
    id: number;
    name: String;
    professorId: String;
    createdAt?: Date;
    updateAt?: Date;
    reviews: Reviews;
    professor: Professors;
}
