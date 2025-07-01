// src/servicio/servicio.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@Injectable()
export class ServicioService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateServicioDto) {
    const fecha = data.fecha ? new Date(data.fecha).toISOString() : new Date().toISOString();
    return this.prisma.servicio.create({
      data: {
        descripcion: data.descripcion,
        fecha,
        motoId: data.motoId,
      },
    });
  }

  findAll() {
    return this.prisma.servicio.findMany({ include: { moto: true } });
  }

  findOne(id: number) {
    return this.prisma.servicio.findUnique({ where: { id }, include: { moto: true } });
  }

  update(id: number, data: UpdateServicioDto) {
    return this.prisma.servicio.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.servicio.delete({ where: { id } });
  }
}
