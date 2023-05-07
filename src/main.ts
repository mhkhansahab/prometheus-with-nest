import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PromService } from './PromService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const myService = app.get(PromService);
  myService?.initializeProm();

  await app.listen(3000);
}
bootstrap();
