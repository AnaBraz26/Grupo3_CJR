import { IsDate, IsEmail, IsInt, IsString, MinLength } from "class-validator";

export class CreateUsersOnlineDto {
    @IsEmail()
    email: string;
    @IsString()
    password?: string;
    @IsString()
    token?: string;
    @IsInt()
    user?: number;
}
