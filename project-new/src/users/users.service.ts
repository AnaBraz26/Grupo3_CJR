import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {PrismaClient} from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersOnlineDto } from './dto/create-users-online.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const user = await this.prisma.users.create({
      data: data,
    });
    return user;
  }

  async login(data: {email: string, token: string, user: number}){
    return data
  }

  async findAll() {
    return await this.prisma.users.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    return await this.prisma.users.update({
      where: {
        id: id,
      },
      data: data
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.users.findUnique({
      where:{
        email: email,
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.users.delete({
      where: {
        id: id,
      },
    });
  }
}
