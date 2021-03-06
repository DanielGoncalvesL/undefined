import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateVehiclesExpenses1617142237776 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles_expenses',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'value',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
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
          name: 'vehicleExpense',
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
    await queryRunner.dropTable('vehicles_expenses');
  }
}
