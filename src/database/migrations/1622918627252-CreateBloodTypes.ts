import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateBloodType1622918627252 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'tipo_sanguineo',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    { 
                        name: 'client_id', 
                        type: 'uuid' 
                    },
                    {
                        name: 'tipo_sanguineo',
                        type: 'enum',
                        enum: ['a+' , 'a-' , 'b+' , 'b-' , 'o+' , 'o-' , 'ab+' , 'ab-'],
                        isNullable: false
                    },                    
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
            })
        )

        /* await queryRunner.createForeignKey(
            'tipo_sanguineo',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'clients',
                name: 'fk_clients_blood',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        ) */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        /* await queryRunner.dropForeignKey('tipo_sanguineo', 'fk_clients_blood'); */

        await queryRunner.dropTable("tipo_sanguineo")
    }

}
