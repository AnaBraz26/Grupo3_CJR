import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {PrismaClient} from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const user = await this.prisma.users.create({
      data: data,
    });
    return user;
  }

  async findAll() {
    return await this.prisma.users.findMany();
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

  async remove(id: number) {
    return await this.prisma.users.delete({
      where: {
        id: id,
      },
    });
  }
}
