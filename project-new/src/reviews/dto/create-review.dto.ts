import { IsDate, IsInt, IsString } from "class-validator";

export class CreateReviewDto{
    @IsString()
    content: string;
    @IsInt()
    disciplineId: number;
    @IsInt()
    userId: number;
    @IsInt()
    professorId: number;
    // @IsDate()
    // createdAt: Date;
    // @IsDate()
    // updateAt: Date;
}