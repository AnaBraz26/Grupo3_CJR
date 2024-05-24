import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessorDto } from './create-professor.dto';
import { IsDate, IsInt, IsString } from 'class-validator';

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {
    @IsString()
    name:  string;
    @IsString()
    department: string;
    @IsInt()
    disciplineId: number;
    @IsDate()
    createdAt: Date;
    @IsDate()
    updateAt: Date;
}
