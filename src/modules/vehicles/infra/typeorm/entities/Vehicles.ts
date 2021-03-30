import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';
import VehicleSale from '@modules/vehicles/infra/typeorm/entities/VehicleSale';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
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

    @OneToMany(() => VehicleExpenses, (vehicleExpenses) => vehicleExpenses.vehicle)
    vehicleExpense: VehicleExpenses

    @OneToMany(() => VehicleSale, (vehicleSale) => vehicleSale.vehicle)
    vehicleSale: VehicleSale

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
