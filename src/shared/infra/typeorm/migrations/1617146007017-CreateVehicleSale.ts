import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateVehicleSale1617146007017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles_sale',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'sale_value',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [{
          name: 'vehicleSale',
          columnNames: ['vehicle'],
          referencedColumnNames: ['id'],
          referencedTableName: 'vehicles',
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE',
        }],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles_sale');
  }
}
