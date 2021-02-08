import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IPhone } from './phone.interface';

@Entity('phone')
export class PhoneEntity implements IPhone {
  @PrimaryGeneratedColumn('uuid')
  @Index()
  id: string;

  @Column()
  type: string;

  @Column({ unique: false })
  serial: string;

  @Column()
  color: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }

  @Column({
    type: 'jsonb',
    default: {},
  })
  metadata: unknown;
}
