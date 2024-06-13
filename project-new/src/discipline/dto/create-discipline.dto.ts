import { IsDate, IsString } from "class-validator";

export class CreateDisciplineDto {
    @IsString()
    name: string;
    @IsInt()
    professorId: number;
    @IsDate()
    creatAt: Date;
    @IsDate()
    updateAt: Date;
}
