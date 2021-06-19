"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSevicesClients1623467666433 = void 0;
const typeorm_1 = require("typeorm");
class CreateSevicesClients1623467666433 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'services_clients',
            columns: [
                { name: 'service_id', type: 'uuid' },
                { name: 'client_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('services_clients', new typeorm_1.TableForeignKey({
            columnNames: ['service_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'services',
            name: 'fk_services_clients',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('services_clients', new typeorm_1.TableForeignKey({
            columnNames: ['client_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'clients',
            name: 'fk_clients_services',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('services_clients', 'fk_services_clients');
        await queryRunner.dropForeignKey('services_clients', 'fk_clients_services');
        await queryRunner.dropTable('services_clients');
    }
}
exports.CreateSevicesClients1623467666433 = CreateSevicesClients1623467666433;
