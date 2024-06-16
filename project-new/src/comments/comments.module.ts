import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CommentsController],
  providers: [PrismaService, CommentsService],
})
export class CommentsModule {}
