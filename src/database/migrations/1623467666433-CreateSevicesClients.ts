import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSevicesClients1623467666433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'services_clients',
                columns: [
                    { name: 'service_id', type: 'uuid' },
                    { name: 'client_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'services_clients',
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'services',
                name: 'fk_services_clients',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey(
            'services_clients',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'clients',
                name: 'fk_clients_services',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('services_clients', 'fk_services_clients');
        await queryRunner.dropForeignKey('services_clients', 'fk_clients_services');

        await queryRunner.dropTable('services_clients');
    }

}
