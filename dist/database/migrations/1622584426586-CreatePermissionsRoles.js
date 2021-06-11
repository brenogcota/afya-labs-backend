"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissionsRoles1622584426586 = void 0;
const typeorm_1 = require("typeorm");
class CreatePermissionsRoles1622584426586 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "permissions_roles",
            columns: [
                { name: 'role_id', type: 'uuid' },
                { name: 'permission_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('permissions_roles', new typeorm_1.TableForeignKey({
            columnNames: ['permission_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'permissions',
            name: 'fk_permissions_roles_',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('permissions_roles', new typeorm_1.TableForeignKey({
            columnNames: ['role_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'roles',
            name: 'fk_roles_permissions',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('permissions_roles', 'fk_roles_permissions');
        await queryRunner.dropForeignKey('permissions_roles', 'fk_permissions_roles_');
        await queryRunner.dropTable('permissions_roles');
    }
}
exports.CreatePermissionsRoles1622584426586 = CreatePermissionsRoles1622584426586;
