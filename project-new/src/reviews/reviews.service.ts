import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateReviewDto) {
    const review = await this.prisma.reviews.create({
      data: data,
    });
    return review;
  }

  async findAll() {
    return await this.prisma.reviews.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.reviews.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: UpdateReviewDto) {
    return await this.prisma.reviews.update({
      where: {
        id: id,
      },
      data: data
    });
  }

  async remove(id: number) {
    return await this.prisma.reviews.delete({
      where: {
        id: id,
      },
    });
  }
}
