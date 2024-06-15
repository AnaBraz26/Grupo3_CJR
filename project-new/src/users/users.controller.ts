import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe, Put, HttpException, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { compareSync, hashSync } from 'bcrypt';
import { CreateUsersOnlineDto } from './dto/create-users-online.dto';
import { v4 as uuid } from 'uuid';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register')
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {
    const email = await this.usersService.findByEmail(createUserDto.email)
    if (email) {
      throw new HttpException('User already exists', 409);
    }
    /* console.log(bcrypt) */
    createUserDto.password = hashSync(createUserDto.password, 10)
    return await this.usersService.create(createUserDto);
  }

  @Post()
  @HttpCode(200)
  async login(@Body() CreateUsersOnlineDto: CreateUsersOnlineDto) {
    const email = await this.usersService.findByEmail(CreateUsersOnlineDto.email)
    if (!email) {
      throw new HttpException('User not found in our database', 404);
    }
    if (!compareSync(CreateUsersOnlineDto.password, email.password)){
      throw new HttpException('User with email or password incorrect', 403)
    }
    const token = uuid();
    
    return await this.usersService.login({email: CreateUsersOnlineDto.email, token: token, user: email.id });  
  }



  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.remove(id);
  }
}
