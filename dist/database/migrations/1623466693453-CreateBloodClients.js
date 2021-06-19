"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBloodClients1623466693453 = void 0;
const typeorm_1 = require("typeorm");
class CreateBloodClients1623466693453 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'blood_clients',
            columns: [
                { name: 'blood_id', type: 'uuid' },
                { name: 'client_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('blood_clients', new typeorm_1.TableForeignKey({
            columnNames: ['blood_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'blood_types',
            name: 'fk_blood_clients',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('blood_clients', new typeorm_1.TableForeignKey({
            columnNames: ['client_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'clients',
            name: 'fk_clients_blood',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('blood_clients', 'fk_blood_clients');
        await queryRunner.dropForeignKey('blood_clients', 'fk_clients_blood');
        await queryRunner.dropTable('blood_clients');
    }
}
exports.CreateBloodClients1623466693453 = CreateBloodClients1623466693453;
