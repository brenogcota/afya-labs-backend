import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProfessions1623440418276 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'professions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    { 
                        name: 'specialists_id', 
                        type: 'uuid' 
                    },
                    {
                        name: 'nome',
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
            'professions',
            new TableForeignKey({
                columnNames: ['specialists_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'specialists',
                name: 'fk_specialists_profession',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('professions', 'fk_specialists_profession');

        await queryRunner.dropTable('professions');
    }

}
