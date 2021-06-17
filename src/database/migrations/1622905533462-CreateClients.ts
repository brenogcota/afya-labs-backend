import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateClient1622905533462 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'clients',
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
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'cpf',// achar um forma de validar
                        type: 'varchar'
                    },
                    {
                        name: 'telefone',
                        type: 'varchar'
                    },
                    {
                        name: 'celular',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'tipo_sanguineo',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
            })
        )

        await queryRunner.createForeignKey(
            "clients",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                name: 'fk_users_clients',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('clients', 'fk_users_clients');

        await queryRunner.dropTable("clients")
    }

}
