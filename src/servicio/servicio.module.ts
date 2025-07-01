import { Module } from '@nestjs/common';
import { ServicioController } from './servicio.controller';
import { ServicioService } from './servicio.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ServicioController],
  providers: [ServicioService, PrismaService],
})
export class ServicioModule {}
