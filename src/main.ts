import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
config();
import { AppModule } from './app.module';
import { dbConfig } from './configs/db.config';
import { readFile } from 'fs/promises';
import { serverConfig } from './configs/server.config';
import * as cookieParser from 'cookie-parser';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

async function bootstrap() {
  const { corsOrigin: origin, port } = serverConfig;
  const app = await NestFactory.create(AppModule.forRoot(dbConfig));

  app.enableCors(origin && { origin });
  app.enableShutdownHooks();
  app.use(cookieParser());

  const options = new DocumentBuilder()
    .setTitle('API DOCUMENTATION')
    .setDescription('')
    .setVersion(JSON.parse(await readFile('./package.json', 'utf-8')).version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  writeFileSync(resolve(`api.json`), JSON.stringify(document, null, 2));

  await app.listen(port);
}

bootstrap();
