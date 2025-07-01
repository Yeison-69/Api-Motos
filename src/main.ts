import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ✅ Esto sirve los archivos estáticos (como imágenes) desde /public
  app.useStaticAssets(join(process.cwd(), 'public'));

  // ✅ Esto permite validar DTOs automáticamente
  app.useGlobalPipes(new ValidationPipe());

  // ✅ Esta es la parte importante para tu error actual:
  app.enableCors({
    origin: 'http://127.0.0.1:5500', // o '*', pero solo para pruebas locales
  });

  await app.listen(process.env.PORT ?? 3002);
}

bootstrap();
