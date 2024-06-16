import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCommentDto) {
    const comment = await this.prisma.comments.create({
      data: data,
    });
    return comment;
  }

  async findAll() {
    return await this.prisma.comments.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.comments.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: UpdateCommentDto) {
    return await this.prisma.comments.update({
      where: {
        id: id,
      },
      data: data
    });
  }

  async remove(id: number) {
    return await this.prisma.comments.delete({
      where: {
        id: id,
      },
    });
  }
}
