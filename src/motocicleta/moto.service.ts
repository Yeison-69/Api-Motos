// src/moto/moto.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';

@Injectable()
export class MotoService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateMotoDto) {
    return this.prisma.moto.create({ data });
  }

  findAll() {
    return this.prisma.moto.findMany({ include: { cliente: true } });
  }

  findOne(id: number) {
    return this.prisma.moto.findUnique({
      where: { id },
      include: { cliente: true, servicios: true },
    });
  }

  update(id: number, data: UpdateMotoDto) {
    return this.prisma.moto.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.moto.delete({ where: { id } });
  }
}