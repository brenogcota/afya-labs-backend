import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateServices1623434085894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'services',
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
                        name: 'clients_id', 
                        type: 'uuid' 
                    },
                    { 
                        name: 'status_id', 
                        type: 'uuid' 
                    },
                    {
                        name: 'dataAgendamento',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'dataAtendimento',
                        type: 'timestamp'// não sei se é a melhor forma
                    },
                    {
                        name: 'horaAtendimento',
                        type: 'timestamp'
                    },
                    {
                        name: 'valor',
                        type: 'varchar'// no diagrama estava indicando que era pra ser um typo Date???O.o
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
            'services',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'clients',
                name: 'fk_clients_services',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey(
            'services',
            new TableForeignKey({
                columnNames: ['specialists_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'specialists',
                name: 'fk_specialists_services',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey(
            'services',
            new TableForeignKey({
                columnNames: ['status_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'service_status',
                name: 'fk_status_services',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('services', 'fk_clients_services');
        await queryRunner.dropForeignKey('services', 'fk_specialists_services');
        await queryRunner.dropForeignKey('services', 'fk_status_services');

        await queryRunner.dropTable("services");

    }

}
