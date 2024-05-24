import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';
import { IsDate, IsEmail, IsInt, IsString } from "class-validator";

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
    @IsString()
    content?: string;
}
