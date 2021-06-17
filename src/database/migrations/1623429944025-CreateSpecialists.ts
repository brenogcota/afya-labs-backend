import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecialists1623429944025 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specialists",
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
                        name: 'profession_id', 
                        type: 'uuid' 
                    },
                    {
                        name: 'registro',
                        type: 'varchar'
                    },
                    {
                        name: 'name',
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
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            "specialists",
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
            'specialists',
            new TableForeignKey({
                columnNames: ['profession_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'professions',
                name: 'fk_specialist_profession',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )

 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('specialists', 'fk_users_specialists');
        await queryRunner.dropForeignKey('specialists', 'fk_specialist_profession');

        await queryRunner.dropTable("specialists");
    }

}
