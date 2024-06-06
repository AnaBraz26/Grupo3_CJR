import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Professor } from './entities/professor.entity';

@Injectable()
export class ProfessorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProfessorDto) {
    const professor = await this.prisma.professors.create({
        data: data,
    });
    return professor;
  }

  async findAll() {
    return await this.prisma.professors.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.professors.findUnique({
        where: {
            id: id,
        },
    });
  }

  async update(id: number, data: UpdateProfessorDto) {
    return await this.prisma.professors.update({
      where: {
          id: id,
      },
      data: data
    });
  }

  async remove(id: number) {
    return await this.prisma.professors.delete({
      where: {
        id: id,
      },
    });
  }
}
