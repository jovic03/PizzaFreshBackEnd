import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);//alterado de 3000 p/ 3333 pra no conflitar com react
}
bootstrap();
