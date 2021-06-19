"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecialistsChartsHist1623469572644 = void 0;
const typeorm_1 = require("typeorm");
class CreateSpecialistsChartsHist1623469572644 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'specialists_chartsHist',
            columns: [
                { name: 'specialists_id', type: 'uuid' },
                { name: 'chartsHist_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('specialists_chartsHist', new typeorm_1.TableForeignKey({
            columnNames: ['specialists_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'specialists',
            name: 'fk_specialists_chartsHist',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('specialists_chartsHist', new typeorm_1.TableForeignKey({
            columnNames: ['chartsHist_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'charts_history',
            name: 'fks_chartsHist_specialist',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('specialists_chartsHist', 'fk_specialists_chartsHist');
        await queryRunner.dropForeignKey('specialists_chartsHist', 'fks_chartsHist_specialist');
        await queryRunner.dropTable('specialists_chartsHist');
    }
}
exports.CreateSpecialistsChartsHist1623469572644 = CreateSpecialistsChartsHist1623469572644;
