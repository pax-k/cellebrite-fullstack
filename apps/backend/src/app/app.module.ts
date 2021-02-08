import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhonesModule } from './modules/phones/phones.module';
import { DatabaseModule } from './modules/database/database.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        HOST: Joi.string(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    PhonesModule,
  ],
})
export class AppModule {}
