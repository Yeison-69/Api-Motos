// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaService } from './prisma/prisma.service';
import { ClienteModule } from './cliente/cliente.module';
import { MotoModule } from './moto/moto.module';
import { ServicioModule } from './servicio/servicio.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClienteModule,
    MotoModule,
    ServicioModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
