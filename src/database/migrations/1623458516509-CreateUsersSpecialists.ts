import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersSpecialists1623458516509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users_specialists',
                columns: [
                    { name: 'user_id', type: 'uuid' },
                    { name: 'specialist_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'users_specialists',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                name: 'fk_users_specialists',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        );

        await queryRunner.createForeignKey(
            'users_specialists',
            new TableForeignKey({
                columnNames: ['specialist_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'specialists',
                name: 'fk_specialists_users',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users_specialists', 'fk_users_specialists');
        await queryRunner.dropForeignKey('users_specialists', 'fk_specialists_users');

        await queryRunner.dropTable('users_specialists');
    }

}
