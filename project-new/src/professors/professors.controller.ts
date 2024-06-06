import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorsService: ProfessorsService) {}

  @Post()
  async create(@Body() createProfessorDto: CreateProfessorDto) {
    return await this.professorsService.create(createProfessorDto);
  }

  @Get()
  async findAll() {
    return await this.professorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.professorsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) updateProfessorDto: UpdateProfessorDto) {
    return await this.professorsService.update(id, updateProfessorDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.professorsService.remove(id);
  }
}
