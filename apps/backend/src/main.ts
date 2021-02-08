import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app/app.module';
import {
  HttpExceptionFilter,
  EntityExceptionFilter,
} from './app/common/exceptions.filter';

import {
  createExpressWinstonHandler,
  createNestWinstonLogger,
  httpContextMiddleware,
  requestIdHandler,
} from '@minddoc/nest-express-winston';

async function bootstrap() {
  const nestWinstonLogger = createNestWinstonLogger('app');
  const app = await NestFactory.create(AppModule, {
    logger: nestWinstonLogger,
  });
  const expressWinstonHandler = createExpressWinstonHandler(
    nestWinstonLogger.logger
  );
  app.use(expressWinstonHandler);
  app.use(httpContextMiddleware);
  app.use(requestIdHandler);
  app.enableCors();
  const configService = app.get(ConfigService);
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Nest MEAN')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .setBasePath('/api/v1')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/api/docs', app, swaggerDoc, {
    explorer: true,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });

  app.setGlobalPrefix('api/v1');
  app.useGlobalFilters(new EntityExceptionFilter(), new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );
  await app.listen(configService.get('PORT'), configService.get('HOST'));
  nestWinstonLogger.debug(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
