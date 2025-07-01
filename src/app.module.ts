// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { MotoModule } from './motocicleta/moto.module';
import { ServicioModule } from './servicio/servicio.module';
import { ContactoModule } from './contacto/contacto.module';
import { CitaModule } from './cita/cita.module';

@Module({
  imports: [
    ClienteModule,
    MotoModule,
    ServicioModule,
    ContactoModule,
    CitaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
