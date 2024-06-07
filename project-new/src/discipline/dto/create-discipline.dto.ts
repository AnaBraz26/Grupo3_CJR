import { IsDate, IsString } from "class-validator";

export class CreateDisciplineDto {
    @IsString()
    name: string;
    @IsString()
    professorId: string;
    @IsDate()
    creatAt: Date;
    @IsDate()
    updateAt: Date;
}
