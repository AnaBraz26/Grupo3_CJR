import { IsDate, IsString } from "class-validator";

export class CreateDisciplineDto {
    @IsString()
    name: String;
    @IsString()
    professorId: String;
    @IsDate()
    creatAt: Date;
    @IsDate()
    updateAt: Date;
}
