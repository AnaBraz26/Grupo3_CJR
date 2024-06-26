import { IsDate, IsEmail, IsInt, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsString()
    name: string;
    @IsString()
    course?: string;
    @IsString()
    department?: string;
    @IsDate()
    createdAt: Date;
    @IsDate()
    updateAt: Date;
}