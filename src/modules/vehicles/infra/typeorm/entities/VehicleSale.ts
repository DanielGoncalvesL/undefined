import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicles';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('vehicles_sale')
export default class VehicleSale {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'sale_value' })
    saleValue: string;

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.vehicleSale, { eager: true })
    vehicle: Vehicle;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
