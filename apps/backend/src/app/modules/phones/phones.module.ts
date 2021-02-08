import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneEntity } from './phone.entity';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhoneEntity])],
  providers: [PhonesService],
  controllers: [PhonesController],
})
export class PhonesModule {}
