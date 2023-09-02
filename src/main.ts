import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJs REST API')
    .setDescription('NestJs REST API')
    .setContact('João da Silva Gomes', 'https://github.com/joaosgomes/nestjs-rest-api', 'joao.s.gomes@outlook.pt')
    .setTermsOfService('')
    .setBasePath('/')
    .setVersion('1.0')
    .addTag('NestJs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);

  console.log(`Application running at ${await app.getUrl()}`)
}
bootstrap();
