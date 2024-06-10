import { Injectable } from '@nestjs/common';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DisciplineService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateDisciplineDto) {
    const discipline = await this.prisma.discipline.create({
        data: data,
    });
    return discipline;
  }

  async findAll() {
    return await this.prisma.discipline.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.discipline.findUnique({
        where: {
            id: id,
        },
    });
  }

  async update(id: number, data: UpdateDisciplineDto) {
    return await this.prisma.discipline.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async remove(id: number) {
    return await this.prisma.discipline.delete({
      where: {
        id: id,
      },
    });
  }
}
