import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsDate, IsEmail, IsInt, IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
