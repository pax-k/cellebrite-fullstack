import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreatePhoneDto, UpdatePhoneDto } from './dto';
import { PhoneEntity } from './phone.entity';

@Injectable()
export class PhonesService {
  constructor(
    @InjectRepository(PhoneEntity)
    private readonly phonesRepository: Repository<PhoneEntity>
  ) {}

  create(createPhoneDto: CreatePhoneDto): Promise<PhoneEntity> {
    const phone = new PhoneEntity();
    phone.type = createPhoneDto.type;
    phone.serial = createPhoneDto.serial;
    phone.color = createPhoneDto.color;
    phone.metadata = createPhoneDto.metadata;
    return this.phonesRepository.save(phone);
  }

  async getAllPhones(
    offset: number = 0,
    limit: number = 10
  ): Promise<{ items: PhoneEntity[]; count: number }> {
    const [items, count] = await this.phonesRepository.findAndCount({
      order: {
        id: 'ASC',
      },
      skip: offset,
      take: limit,
    });
    return {
      items,
      count,
    };
  }

  async searchForPhones(
    search: string = '',
    field: string = 'type',
    offset: number = 0,
    limit: number = 10
  ): Promise<{ items: PhoneEntity[]; count: number }> {
    const [items, count] = await this.phonesRepository.findAndCount({
      order: {
        id: 'ASC',
      },
      where: { [field]: Like('%' + search + '%') },
      skip: offset,
      take: limit,
    });
    return {
      items,
      count,
    };
  }

  async findOne(id: string): Promise<PhoneEntity> {
    return await this.phonesRepository.findOneOrFail(id);
  }

  async update(
    phoneId: string,
    updatePhoneRequest: UpdatePhoneDto
  ): Promise<PhoneEntity> {
    const existingPhone = await this.phonesRepository.findOneOrFail(phoneId);
    const updated = { ...existingPhone, ...updatePhoneRequest };
    return await this.phonesRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    await this.phonesRepository.delete(id);
  }

  async removeMultiple(ids: Array<string>): Promise<void> {
    await this.phonesRepository.delete(ids);
  }
}
