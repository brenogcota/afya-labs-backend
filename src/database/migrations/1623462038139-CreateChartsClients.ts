import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateChartsClients1623462038139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'charts_clients',
                columns: [
                    { name: 'chart_id', type: 'uuid' },
                    { name: 'client_id', type: 'uuid'}
                ]
            })
        )

        await queryRunner.createForeignKey(
            'charts_clients',
            new TableForeignKey({
                columnNames: ['chart_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'charts',
                name: 'fk_charts_clients',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey(
            'charts_clients',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'clients',
                name: 'fk_clients_charts',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('charts_clients', 'fk_charts_clients');
        await queryRunner.dropForeignKey('charts_clients', 'fk_clients_charts');

        await queryRunner.dropTable('charts_clients');
    }

}
