import { Discipline } from "src/discipline/entities/discipline.entity";
import { Review } from "src/reviews/entities/review.entity";

export class Professor {
    id: number;
    name:  string;
    department: string;
    disciplineId: number;
    createdAt: Date;
    updateAt: Date;
    reviews: Review
    discipline: Discipline;
  
}
