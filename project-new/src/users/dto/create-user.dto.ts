import { IsEmail, IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    name: string;
    @IsString()
    course?: string;
    @IsString()
    department?: string;
}
