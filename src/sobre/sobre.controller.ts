// src/sobre/sobre.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { SobreService } from './sobre.service';
import { CreateSobreDto } from './dto/create-sobre.dto';

@Controller('sobre')
export class SobreController {
  constructor(private readonly sobreService: SobreService) {}

  @Post()
  create(@Body() createSobreDto: CreateSobreDto) {
    return this.sobreService.create(createSobreDto);
  }

  @Get()
  findAll() {
    return this.sobreService.findAll();
  }
}