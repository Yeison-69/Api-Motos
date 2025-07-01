import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactoDto } from './dto/create-contacto.dto';

@Injectable()
export class ContactoService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateContactoDto) {
    return this.prisma.contacto.create({
      data: {
        nombre: data.nombre,
        email: data.email,
        mensaje: data.mensaje,
      },
    });
  }

  findAll() {
    return this.prisma.contacto.findMany({
      orderBy: { id: 'desc' },
    });
  }
}
