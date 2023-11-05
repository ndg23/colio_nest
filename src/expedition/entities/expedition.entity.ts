// expedition.entity.ts

import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';

@Entity()
export class Expedition extends BaseEntity{
  @PrimaryGeneratedColumn()
  expeditionID: number;

  @Column()
  description: string;

  @Column()
  parcelSize: string;

  @Column()
  weight: number;

  @Column()
  desiredDeliveryDate: Date;

  @Column()
  expeditionStatus: string;

  @Column()
  serviceType: string;

  @ManyToOne(() => User, user => user.expeditions)
  user: User;

  // Other attributes, relations, and annotations
}
