import { PhoneTypeEnum } from './phone.enum';

export interface IPhone {
  id: string;
  type: PhoneTypeEnum | string;
  color: string;
  serial: string;
  metadata: unknown;
  createdAt: Date;
  updatedAt: Date;
}

