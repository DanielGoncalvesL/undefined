import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('vehicles_expenses')
export default class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    value: number;

    @Column()
    description: string;

    @Column()
    vehicle_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
