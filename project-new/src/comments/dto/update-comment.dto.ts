import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import { IsDate, IsInt, IsString } from 'class-validator';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
    @IsInt()
    usersId?: number;
    @IsInt()
    reviewsId?: number;
    @IsString()
    content?: string;
    @IsDate() 
    createAt?: Date;
    @IsDate()
    updateAt: Date; 
}
