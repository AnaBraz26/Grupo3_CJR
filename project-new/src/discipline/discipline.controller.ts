import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe, Put } from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';

@Controller('discipline')
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Post()
  async create(@Body() createDisciplineDto: CreateDisciplineDto) {
    return await this.disciplineService.create(createDisciplineDto);
  }

  @Get()
  async findAll() {
    return await this.disciplineService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.disciplineService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) updateDisciplineDto: UpdateDisciplineDto) {
    id = Number(id)
    console.log(id,typeof(id))
    return await this.disciplineService.update(id, updateDisciplineDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.disciplineService.remove(id);
  }
}
