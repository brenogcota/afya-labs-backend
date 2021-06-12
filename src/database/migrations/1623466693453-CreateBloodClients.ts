import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateBloodClients1623466693453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'blood_clients',
                columns: [
                    { name: 'blood_id', type: 'uuid' },
                    { name: 'client_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'blood_clients',
            new TableForeignKey({
                columnNames: ['blood_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'blood_types',
                name: 'fk_blood_clients',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey(
            'blood_clients',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'clients',
                name: 'fk_clients_blood',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('blood_clients', 'fk_blood_clients');
        await queryRunner.dropForeignKey('blood_clients', 'fk_clients_blood');

        await queryRunner.dropTable('blood_clients');
    }

}
