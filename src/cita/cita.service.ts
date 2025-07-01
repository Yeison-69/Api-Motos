import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCitaDto } from './dto/create-cita.dto';

@Injectable()
export class CitaService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCitaDto) {
    return this.prisma.cita.create({
      data: {
        ...data,
        fecha: new Date(data.fecha),
      },
    });
  }

  findAll() {
    return this.prisma.cita.findMany({ orderBy: { fecha: 'asc' } });
  }
}
