// src/cliente/cliente.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateClienteDto) {
    return this.prisma.cliente.create({ data });
  }

  findAll() {
    return this.prisma.cliente.findMany({ include: { motos: true } });
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({ where: { id }, include: { motos: true } });
  }

  update(id: number, data: UpdateClienteDto) {
    return this.prisma.cliente.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.cliente.delete({ where: { id } });
  }
}