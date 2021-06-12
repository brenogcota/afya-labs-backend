import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateClientsAddresses1623460672022 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'clients_addresses',
                columns: [
                    { name: 'client_id', type: 'uuid' },
                    { name: 'address_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'clients_addresses',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'clients',
                name: 'fk_clients_addresses',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        );

        await queryRunner.createForeignKey(
            'clients_addresses',
            new TableForeignKey({
                columnNames: ['address_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'addresses',
                name: 'fk_addresses_clients',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('clients_addresses', 'fk_clients_addresses');
        await queryRunner.dropForeignKey('clients_addresses', 'fk_addresses_clients');

        await queryRunner.dropTable('clients_addresses');
    }

}
