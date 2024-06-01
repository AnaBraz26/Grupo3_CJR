import { Module } from '@nestjs/common';
import { UsersOnlineService } from './users-online.service';
import { UsersOnlineController } from './users-online.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsersOnlineController],
  providers: [PrismaService, UsersOnlineService],
})
export class UsersOnlineModule {}
