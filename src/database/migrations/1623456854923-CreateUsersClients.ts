import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersClients1623456854923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_clients",
                columns: [
                    { name: 'user_id', type: 'uuid' },
                    { name: 'client_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            "users_clients",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                name: 'fk_users_clients',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        );

        await queryRunner.createForeignKey(
            "users_clients",
            new TableForeignKey({
                columnNames: ["client_id"],
                referencedColumnNames: ["id"],
                referencedTableName: 'clients',
                name: 'fk_clients_users',
                onDelete: 'CASCADE',
                onUpdate: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users_clients', 'fk_users_clients');
        await queryRunner.dropForeignKey('users_clients', 'fk_clients_users');

        await queryRunner.dropTable('users_clients')
    }

}
