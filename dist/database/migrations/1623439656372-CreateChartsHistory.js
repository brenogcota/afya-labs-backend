"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChartsHistory1623439656372 = void 0;
const typeorm_1 = require("typeorm");
class CreateChartsHistory1623439656372 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'charts_history',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'data',
                    type: 'timestamp'
                },
                {
                    name: 'hora',
                    type: 'timestamp'
                },
                {
                    name: 'descrição',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('charts_history');
    }
}
exports.CreateChartsHistory1623439656372 = CreateChartsHistory1623439656372;
