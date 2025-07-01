// src/contacto/contacto.module.ts
import { Module } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoController } from './contacto.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContactoController],
  providers: [ContactoService],
})
export class ContactoModule {}
