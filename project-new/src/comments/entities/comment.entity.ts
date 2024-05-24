import { Review } from "src/reviews/entities/review.entity"
import { User } from "src/users/entities/user.entity"

export class Comment {

    id: number;
    usersId: number;
    reviewsId: number;
    content: string; 
    createAt: Date;
    updateAt: Date;
    user: User;
    reviews: Review;

}
