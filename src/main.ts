import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // setting a global prefix -> routes become 'api/v1/..../'
  app.setGlobalPrefix('/api/v1');
  // handle all user input validation
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
