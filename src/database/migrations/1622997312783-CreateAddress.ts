import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAddress1622997312783 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table({
                name: "addresses",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    { 
                        name: 'user_id', 
                        type: 'uuid' 
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

        await queryRunner.createForeignKey(
            'addresses',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                name: 'fk_users_addresses',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('addresses', 'fk_users_addresses');

        await queryRunner.dropTable("addresses")
    }

}
