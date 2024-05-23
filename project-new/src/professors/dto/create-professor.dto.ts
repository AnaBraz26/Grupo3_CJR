import { IsDate, IsEmail, IsInt, IsString } from "class-validator";

export class CreateProfessorDto{
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
