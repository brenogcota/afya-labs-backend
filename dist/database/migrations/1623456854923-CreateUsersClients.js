"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersClients1623456854923 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersClients1623456854923 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users_clients",
            columns: [
                { name: 'user_id', type: 'uuid' },
                { name: 'client_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey("users_clients", new typeorm_1.TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            name: 'fk_users_clients',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey("users_clients", new typeorm_1.TableForeignKey({
            columnNames: ["client_id"],
            referencedColumnNames: ["id"],
            referencedTableName: 'clients',
            name: 'fk_clients_users',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('users_clients', 'fk_users_clients');
        await queryRunner.dropForeignKey('users_clients', 'fk_clients_users');
        await queryRunner.dropTable('users_clients');
    }
}
exports.CreateUsersClients1623456854923 = CreateUsersClients1623456854923;
