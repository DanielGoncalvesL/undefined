import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicles';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('vehicles_expenses')
export default class VehicleExpenses {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    value: string;

    @Column()
    description: string;

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.vehicleSale, { eager: true })
    vehicle: Vehicle;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
