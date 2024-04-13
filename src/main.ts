import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Abrigo exemplo')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('picles-api')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('picles-api', app, document);

  await app.listen(3000);
}
bootstrap();
