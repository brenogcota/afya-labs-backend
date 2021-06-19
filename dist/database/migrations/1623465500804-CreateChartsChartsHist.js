"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChartsChartsHist1623465500804 = void 0;
const typeorm_1 = require("typeorm");
class CreateChartsChartsHist1623465500804 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'charts_chartsHist',
            columns: [
                { name: 'chart_id', type: 'uuid' },
                { name: 'chartHist_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('charts_chartsHist', new typeorm_1.TableForeignKey({
            columnNames: ['chart_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'charts',
            name: 'fk_charts_chartsHist',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('charts_chartsHist', new typeorm_1.TableForeignKey({
            columnNames: ['chartHist_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'charts_history',
            name: 'fk_chartsHist_charts',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('charts_chartsHist', 'fk_charts_chartsHist');
        await queryRunner.dropForeignKey('charts_chartsHist', 'fk_chartsHist_charts');
        await queryRunner.dropTable('charts_chartsHist');
    }
}
exports.CreateChartsChartsHist1623465500804 = CreateChartsChartsHist1623465500804;
