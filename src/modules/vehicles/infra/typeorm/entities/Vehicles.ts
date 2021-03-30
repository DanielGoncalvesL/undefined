import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('vehicles')
export default class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    fuel: string;

    @Column()
    brand: string;

    @Column({ name: 'model_year' })
    modelYear: string;

    @Column({ name: 'price_fipe' })
    priceFipe: string;

    @Column({ name: 'fipe_code' })
    fipeCode: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
