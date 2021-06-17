import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateChartsHistory1623439656372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'charts_history',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    { 
                        name: 'chart_id', 
                        type: 'uuid' 
                    },
                    {
                        name: 'data',
                        type: 'timestamp'
                    },
                    {
                        name: 'hora',
                        type: 'timestamp'
                    },
                    {
                        name: 'descrição',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'charts_history',
            new TableForeignKey({
                columnNames: ['chart_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'charts',
                name: 'fk_charts_chartsHist',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('charts_history', 'fk_charts_chartsHist');

        await queryRunner.dropTable('charts_history');
    }

}
