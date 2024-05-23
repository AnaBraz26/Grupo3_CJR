import { IsEmail, IsInt, IsString } from "class-validator";

export class CreateProfessorDto{
    @IsString()
    name: string;
}
