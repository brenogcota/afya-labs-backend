import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1622997312783 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //cep, logradouro, numero, bairro, localidade,uf
        await queryRunner.createTable(
            new Table({
                name: "adresses",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'cep',
                        type: 'varchar'
                    },
                    {
                        name: 'logradouro',
                        type: 'varchar'
                    },
                    {
                        name: 'numero',
                        type: 'varchar'
                    },
                    {
                        name: 'bairro',
                        type: 'varchar'
                    },
                    {
                        name: 'localidade',
                        type: 'varchar'
                    },
                    {
                        name: 'uf',
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
        await queryRunner.dropTable("adresses")
    }

}
