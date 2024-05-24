import { IsDate, IsInt, IsString } from "class-validator";

export class CreateReviewDto{
    @IsString()
    content: string;
    @IsInt()
    disciplineId: number;
    @IsDate()
    date: Date;
    @IsInt()
    userId: number;
    @IsInt()
    professorId: number;
    @IsDate()
    createAt: Date;
    @IsDate()
    updateAt: Date;
}