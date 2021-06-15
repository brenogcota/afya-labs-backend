import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecialistsProfessions1623468774990 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'specialists_professions',
                columns: [
                    { name: 'specialists_id', type: 'uuid' },
                    { name: 'professions_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'specialists_professions',
            new TableForeignKey({
                columnNames: ['specialists_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'specialists',
                name: 'fk_specialists_professions',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey(
            'specialists_professions',
            new TableForeignKey({
                columnNames: ['professions_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'professions',
                name: 'fk_professions_specialists',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('specialists_professions', 'fk_specialists_professions');
        await queryRunner.dropForeignKey('specialists_professions', 'fk_professions_specialists');

        await queryRunner.dropTable('specialists_professions');
    }

}
