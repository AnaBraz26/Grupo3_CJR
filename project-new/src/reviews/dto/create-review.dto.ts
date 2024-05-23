import { IsDate, IsEmail, IsInt, IsString } from "class-validator";

export class CreateReviewDto{
    @IsString()
    content: string;
    @IsString()
    discipline: string;
    @IsDate()
    date: Date;
}