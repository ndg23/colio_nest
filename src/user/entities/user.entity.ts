// user.entity.ts

import { Expedition } from 'src/expedition/entities/expedition.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    userID: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phoneNumber: string;
    @OneToMany(() => Expedition, (expedition) => expedition.user)
    expeditions: Expedition[]
    // Other attributes, relations, and annotations
}
