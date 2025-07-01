// src/servicio/dto/create-servicio.dto.ts
export class CreateServicioDto {
  descripcion: string;
  fecha: string;
  motoId: number;
}

import { PartialType } from '@nestjs/mapped-types';


export class UpdateServicioDto extends PartialType(CreateServicioDto) {}
