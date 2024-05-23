import { IsDate, IsEmail, IsIn, IsInt, IsString } from "class-validator";

export class CreateCommentDto{
    @IsInt()
    usersId: number;
    @IsInt()
    reviewsId: number;
    @IsString()
    content: string;
    @IsDate() 
    createAt: Date;
    @IsDate()
    updateAt: Date; 
}
