import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecialistsChartsHist1623469572644 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'specialists_chartsHist',
                columns: [
                    { name: 'specialists_id', type: 'uuid' },
                    { name: 'chartsHist_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'specialists_chartsHist',
            new TableForeignKey({
                columnNames: ['specialists_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'specialists',
                name: 'fk_specialists_chartsHist',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey(
            'specialists_chartsHist',
            new TableForeignKey({
                columnNames: ['chartsHist_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'charts_history',
                name: 'fks_chartsHist_specialist',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('specialists_chartsHist', 'fk_specialists_chartsHist');
        await queryRunner.dropForeignKey('specialists_chartsHist', 'fks_chartsHist_specialist');

        await queryRunner.dropTable('specialists_chartsHist');
    }

}
