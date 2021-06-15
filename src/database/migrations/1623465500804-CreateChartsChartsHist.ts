import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateChartsChartsHist1623465500804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'charts_chartsHist',
                columns: [
                    { name: 'chart_id', type: 'uuid' },
                    { name: 'chartHist_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'charts_chartsHist',
            new TableForeignKey({
                columnNames: ['chart_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'charts',
                name: 'fk_charts_chartsHist',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey(
            'charts_chartsHist',
            new TableForeignKey({
                columnNames: ['chartHist_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'charts_history',
                name: 'fk_chartsHist_charts',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('charts_chartsHist', 'fk_charts_chartsHist');
        await queryRunner.dropForeignKey('charts_chartsHist', 'fk_chartsHist_charts');

        await queryRunner.dropTable('charts_chartsHist');
    }

}
