// src/cita/cita.module.ts
import { Module } from '@nestjs/common';
import { CitaController } from './cita.controller';
import { CitaService } from './cita.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CitaController],
  providers: [CitaService],
})
export class CitaModule {}
