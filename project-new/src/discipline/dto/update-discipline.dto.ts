import { PartialType } from '@nestjs/mapped-types';
import { CreateDisciplineDto } from './create-discipline.dto';
import { IsDate, IsInt, IsString } from 'class-validator';

export class UpdateDisciplineDto extends PartialType(CreateDisciplineDto) {
    @IsString()
    name?: string;
    @IsString()
    professorId?: string;
    @IsDate()
    creatAt?: Date;
    @IsDate()
    updateAt?: Date;
}
