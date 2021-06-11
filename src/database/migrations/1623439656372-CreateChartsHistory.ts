import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('charts_history');
    }

}
