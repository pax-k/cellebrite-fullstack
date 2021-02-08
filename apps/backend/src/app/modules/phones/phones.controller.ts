import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  CreatePhoneDto,
  UpdatePhoneDto,
  PaginationParams,
  SearchParams,
  RemoveMultiplePhonesDto,
} from './dto/';
import { PhoneEntity } from './phone.entity';
import { PhonesService } from './phones.service';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Post()
  create(@Body() createPhoneDto: CreatePhoneDto): Promise<PhoneEntity> {
    return this.phonesService.create(createPhoneDto);
  }

  @Get()
  getPhones(
    @Query() { search, field }: SearchParams,
    @Query() { offset, limit }: PaginationParams
  ): Promise<{ items: PhoneEntity[]; count: number }> {
    if (search) {
      return this.phonesService.searchForPhones(search, field, offset, limit);
    }
    return this.phonesService.getAllPhones(offset, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PhoneEntity> {
    const phone = this.phonesService.findOne(id);
    if (!phone) {
      throw new HttpException('Phone not found', HttpStatus.NOT_FOUND);
    }
    return phone;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhoneRequest: UpdatePhoneDto
  ): Promise<PhoneEntity> {
    return this.phonesService.update(id, updatePhoneRequest);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.phonesService.remove(id);
  }
  @Delete()
  removeMultiple(
    @Body() removeMultipleRequest: RemoveMultiplePhonesDto
  ): Promise<void> {
    const { ids } = removeMultipleRequest;
    return this.phonesService.removeMultiple(ids);
  }
}
