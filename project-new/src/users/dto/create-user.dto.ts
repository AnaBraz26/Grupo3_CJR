import { IsEmail, IsInt, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(8)
    password: string;
    @IsString()
    name: string;
    @IsString()
    course?: string;
    @IsString()
    department?: string;
}