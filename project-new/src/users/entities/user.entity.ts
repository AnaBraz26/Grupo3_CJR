import { Comments } from "@prisma/client";
import { Review } from "src/reviews/entities/review.entity";

export class User {
    id: number;
    password: string;
    email: string;
    name: string;
    course?: string;
    department?: string;
    createdAt?: Date;
    updateAt?: Date;
    reviews: Review;
    comments: Comments;

}