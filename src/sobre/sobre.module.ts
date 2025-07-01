// src/sobre/sobre.module.ts
import { Module } from '@nestjs/common';
import { SobreController } from './sobre.controller';
import { SobreService } from './sobre.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [SobreController],
  providers: [SobreService, PrismaService],
})
export class SobreModule {}