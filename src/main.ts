import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  process.env.TZ = 'America/Lima';
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix('ninio');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(8007);
}
bootstrap();
