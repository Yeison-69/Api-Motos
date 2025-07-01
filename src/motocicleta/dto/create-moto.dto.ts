// src/moto/dto/create-moto.dto.ts
export class CreateMotoDto {
  marca: string;
  modelo: string;
  placa: string;
  clienteId: number;
}

import { PartialType } from '@nestjs/mapped-types';

export class UpdateMotoDto extends PartialType(CreateMotoDto) {}