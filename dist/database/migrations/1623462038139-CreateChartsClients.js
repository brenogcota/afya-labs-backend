"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChartsClients1623462038139 = void 0;
const typeorm_1 = require("typeorm");
class CreateChartsClients1623462038139 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'charts_clients',
            columns: [
                { name: 'chart_id', type: 'uuid' },
                { name: 'client_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('charts_clients', new typeorm_1.TableForeignKey({
            columnNames: ['chart_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'charts',
            name: 'fk_charts_clients',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('charts_clients', new typeorm_1.TableForeignKey({
            columnNames: ['client_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'clients',
            name: 'fk_clients_charts',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('charts_clients', 'fk_charts_clients');
        await queryRunner.dropForeignKey('charts_clients', 'fk_clients_charts');
        await queryRunner.dropTable('charts_clients');
    }
}
exports.CreateChartsClients1623462038139 = CreateChartsClients1623462038139;
