import { Module } from '@nestjs/common';
import { MotoController } from './moto.controller';
import { MotoService } from './moto.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MotoController],
  providers: [MotoService, PrismaService],
})
export class MotoModule {}
