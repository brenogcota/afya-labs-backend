"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecialistsRoles1622679980787 = void 0;
const typeorm_1 = require("typeorm");
class CreateSpecialistsRoles1622679980787 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "specialists_roles",
            columns: [
                { name: 'role_id', type: 'uuid' },
                { name: 'specialist_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey("specialists_roles", new typeorm_1.TableForeignKey({
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
            name: 'fk_roles_specialist',
            onDelete: "CASCADE",
            onUpdate: "SET NULL"
        }));
        await queryRunner.createForeignKey("specialists_roles", new typeorm_1.TableForeignKey({
            columnNames: ["specialist_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "specialists",
            name: "fk_specialists_roles",
            onDelete: "CASCADE",
            onUpdate: "SET NULL"
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("specialists_roles", "fk_roles_specialist");
        await queryRunner.dropForeignKey("specialists_roles", "fk_specialists_roles");
        await queryRunner.dropTable("specialists_roles");
    }
}
exports.CreateSpecialistsRoles1622679980787 = CreateSpecialistsRoles1622679980787;
