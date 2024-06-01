import { Injectable } from '@nestjs/common';
import { CreateUsersOnlineDto } from './dto/create-users-online.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersOnlineService {
  constructor(private prisma: PrismaService){}

  async create(createUsersOnlineDto: CreateUsersOnlineDto) {
    return await this.prisma.usersOnline.create({
      data: createUsersOnlineDto
    }) 
  }

  async findAll() {
    return `This action returns all usersOnline`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} usersOnline`;
  }

  async remove(id: number) {
    return `This action removes a #${id} usersOnline`;
  }
}
