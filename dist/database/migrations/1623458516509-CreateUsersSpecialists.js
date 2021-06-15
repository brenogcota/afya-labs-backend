"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersSpecialists1623458516509 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersSpecialists1623458516509 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users_specialists',
            columns: [
                { name: 'user_id', type: 'uuid' },
                { name: 'specialist_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('users_specialists', new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            name: 'fk_users_specialists',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('users_specialists', new typeorm_1.TableForeignKey({
            columnNames: ['specialist_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'specialists',
            name: 'fk_specialists_users',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('users_specialists', 'fk_users_specialists');
        await queryRunner.dropForeignKey('users_specialists', 'fk_specialists_users');
        await queryRunner.dropTable('users_specialists');
    }
}
exports.CreateUsersSpecialists1623458516509 = CreateUsersSpecialists1623458516509;
