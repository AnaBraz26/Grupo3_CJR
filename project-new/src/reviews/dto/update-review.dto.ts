import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';
import { IsDate, IsEmail, IsInt, IsString } from "class-validator";

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
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
