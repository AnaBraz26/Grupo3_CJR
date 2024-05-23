import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ReviewsController],
  providers: [PrismaService, ReviewsService],
})
export class ReviewsModule {}
