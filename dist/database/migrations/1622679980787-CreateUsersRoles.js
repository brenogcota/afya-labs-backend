"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersRoles1622679980787 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersRoles1622679980787 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users_roles",
            columns: [
                { name: 'role_id', type: 'uuid' },
                { name: 'user_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey("users_roles", new typeorm_1.TableForeignKey({
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
            name: 'fk_roles_user',
            onDelete: "CASCADE",
            onUpdate: "SET NULL"
        }));
        await queryRunner.createForeignKey("users_roles", new typeorm_1.TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            name: "fk_users_roles",
            onDelete: "CASCADE",
            onUpdate: "SET NULL"
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("users_roles", "fk_roles_user");
        await queryRunner.dropForeignKey("users_roles", "fk_users_roles");
        await queryRunner.dropTable("users_roles");
    }
}
exports.CreateUsersRoles1622679980787 = CreateUsersRoles1622679980787;
