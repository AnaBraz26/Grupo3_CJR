import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsInt, IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsEmail()
    email?: string;
    @IsString()
    name?: string;
    @IsString()
    course?: string;
    @IsString()
    department?: string;
}
