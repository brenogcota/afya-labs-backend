"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientsAddresses1623460672022 = void 0;
const typeorm_1 = require("typeorm");
class CreateClientsAddresses1623460672022 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'clients_addresses',
            columns: [
                { name: 'client_id', type: 'uuid' },
                { name: 'address_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('clients_addresses', new typeorm_1.TableForeignKey({
            columnNames: ['client_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'clients',
            name: 'fk_clients_addresses',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('clients_addresses', new typeorm_1.TableForeignKey({
            columnNames: ['address_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'addresses',
            name: 'fk_addresses_clients',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('clients_addresses', 'fk_clients_addresses');
        await queryRunner.dropForeignKey('clients_addresses', 'fk_addresses_clients');
        await queryRunner.dropTable('clients_addresses');
    }
}
exports.CreateClientsAddresses1623460672022 = CreateClientsAddresses1623460672022;
