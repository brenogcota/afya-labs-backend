import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("services");

    }

}
