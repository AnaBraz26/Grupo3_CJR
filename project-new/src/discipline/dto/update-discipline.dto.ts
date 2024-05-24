import { PartialType } from '@nestjs/mapped-types';
import { CreateDisciplineDto } from './create-discipline.dto';
import { IsDate, IsString } from 'class-validator';

export class UpdateDisciplineDto extends PartialType(CreateDisciplineDto) {
    @IsString()
    name: String;
    @IsString()
    professorId: String;
    @IsDate()
    creatAt: Date;
    @IsDate()
    updateAt: Date;
}
