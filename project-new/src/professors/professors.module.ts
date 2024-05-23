import { Module } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { ProfessorsController } from './professors.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProfessorsController],
  providers: [PrismaService, ProfessorsService],
})
export class ProfessorsModule {}
