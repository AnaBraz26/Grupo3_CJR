import { IsEmail, IsInt, IsString } from "class-validator";

export class CreateReviewDto{
    @IsString()
    content: string;
}