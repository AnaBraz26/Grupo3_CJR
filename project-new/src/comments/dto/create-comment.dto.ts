import { IsDate, IsEmail, IsInt, IsString } from "class-validator";

export class CreateCommentDto{
    @IsString()
    content: string;
    @IsDate()
    date: Date;
}
