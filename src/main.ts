import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
config();
import { AppModule } from './app.module';
import { dbConfig } from './configs/db.config';
import { readFile } from 'fs/promises';
import { serverConfig } from './configs/server.config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const { corsOrigin: origin, port } = serverConfig;
  const app = await NestFactory.create(AppModule.forRoot(dbConfig));

  app.enableCors(origin && { origin });
  app.enableShutdownHooks();
  app.use(cookieParser());

  SwaggerModule.setup(
    'api-docs',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('API DOCUMENTATION')
        .setDescription('')
        .setVersion(
          JSON.parse(await readFile('./package.json', 'utf-8')).version,
        )
        .build(),
    ),
  );

  await app.listen(port);
}

bootstrap();
