// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000; // Change to any available port you prefer
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
