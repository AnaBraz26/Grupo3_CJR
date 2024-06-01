import { IsDate, IsEmail, IsInt, IsString } from "class-validator";

export class CreateUsersOnlineDto {
    @IsEmail()
    email: string;
    @IsString()
    token: string;
    @IsInt()
    userId: number;
    @IsDate()
    createdAt?: Date;
    @IsDate()
    updateAt?: Date;
}
