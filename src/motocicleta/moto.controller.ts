// src/moto/moto.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { MotoService } from './moto.service';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';

@Controller('motos')
export class MotoController {
  constructor(private readonly motoService: MotoService) {}

  @Post()
  create(@Body() createMotoDto: CreateMotoDto) {
    return this.motoService.create(createMotoDto);
  }

  @Get()
  findAll() {
    return this.motoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMotoDto: UpdateMotoDto) {
    return this.motoService.update(+id, updateMotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motoService.remove(+id);
  }
}