import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecialistsRoles1622679980787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specialists_roles",
                columns: [
                    { name: 'role_id', type: 'uuid' },
                    { name: 'specialist_id', type: 'uuid' }
                ]
            })
        )

        await queryRunner.createForeignKey(
            "specialists_roles",
            new TableForeignKey({
                columnNames: ["role_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "roles",
                name: 'fk_roles_specialist',
                onDelete: "CASCADE",
                onUpdate: "SET NULL"
            })
        );

        await queryRunner.createForeignKey(
            "specialists_roles",
            new TableForeignKey({
                columnNames: ["specialist_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "specialists",
                name: "fk_specialists_roles",
                onDelete: "CASCADE",
                onUpdate: "SET NULL"                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("specialists_roles", "fk_roles_specialist");
        await queryRunner.dropForeignKey("specialists_roles", "fk_specialists_roles");

        await queryRunner.dropTable("specialists_roles");
    }

}
