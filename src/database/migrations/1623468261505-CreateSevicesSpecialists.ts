import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSevicesSpecialists1623468261505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'services_specialists',
                columns: [
                    { name: 'service_id', type: 'uuid' },
                    { name: 'specialists_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'services_specialists',
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'services',
                name: 'fk_services_specialists',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey(
            'services_specialists',
            new TableForeignKey({
                columnNames: ['specialists_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'specialists',
                name: 'fk_specialists_services',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('services_specialists', 'fk_services_specialists');
        await queryRunner.dropForeignKey('services_specialists', 'fk_specialists_services');

        await queryRunner.dropTable('services_specialists');
    }

}
