// src/contacto/dto/create-contacto.dto.ts
import { IsString, IsEmail } from 'class-validator';

export class CreateContactoDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  mensaje: string;
}
