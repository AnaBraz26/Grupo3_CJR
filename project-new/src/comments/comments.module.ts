import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CommentsController],
  providers: [PrismaClient, CommentsService],
})
export class CommentsModule {}
