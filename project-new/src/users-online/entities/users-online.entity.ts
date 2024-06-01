import { User } from "src/users/entities/user.entity";

export class UsersOnline {
    id: number;
    email: string;
    token: string;
    userId: User;
    createdAt?: Date;
    updateAt?: Date;
}
