import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersOnlineService } from './users-online.service';
import { CreateUsersOnlineDto } from './dto/create-users-online.dto';
import bcrypt from 'bcrypt';

@Controller('users-online')
export class UsersOnlineController {
  constructor(private readonly usersOnlineService: UsersOnlineService) {}

  @Post()
  create(@Body() createUsersOnlineDto: CreateUsersOnlineDto) {

    return this.usersOnlineService.create(createUsersOnlineDto);
  }

  @Get()
  findAll() {
    return this.usersOnlineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersOnlineService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersOnlineService.remove(+id);
  }
}
