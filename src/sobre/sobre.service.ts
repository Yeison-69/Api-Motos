// src/sobre/sobre.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSobreDto } from './dto/create-sobre.dto';

@Injectable()
export class SobreService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateSobreDto) {
    return this.prisma.sobre.create({ data });
  }

  findAll() {
    return this.prisma.sobre.findMany();
  }
}
