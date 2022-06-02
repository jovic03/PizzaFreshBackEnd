import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app =  await NestFactory.create<NestExpressApplication>(
    AppModule,{
    cors:true});

    app.set('trust proxy', 1)

  app.useGlobalPipes(new ValidationPipe());//ele que faz a validacao do dado recebido para unicamente o que foi estabelecido (no caso do create-table.dto nao vai poder receber null mais)

  const config = new DocumentBuilder()
    .setTitle('PizzaFresh')
    .setDescription('Aplicação para gestão das mesas de uma pizzaria')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('table')
    .addTag('product')
    .addTag('user')
    .addTag('order')
    .addBearerAuth()
    .build();//somente o build é obrigatorio pro docBuilder, restante é pra organizar e facilitar leitura de codigo

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3333);//alterado de 3000 p/ 3333 pra no conflitar com react
}
bootstrap();
