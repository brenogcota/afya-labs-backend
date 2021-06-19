"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecialistsProfessions1623468774990 = void 0;
const typeorm_1 = require("typeorm");
class CreateSpecialistsProfessions1623468774990 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'specialists_professions',
            columns: [
                { name: 'specialists_id', type: 'uuid' },
                { name: 'professions_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('specialists_professions', new typeorm_1.TableForeignKey({
            columnNames: ['specialists_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'specialists',
            name: 'fk_specialists_professions',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('specialists_professions', new typeorm_1.TableForeignKey({
            columnNames: ['professions_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'professions',
            name: 'fk_professions_specialists',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('specialists_professions', 'fk_specialists_professions');
        await queryRunner.dropForeignKey('specialists_professions', 'fk_professions_specialists');
        await queryRunner.dropTable('specialists_professions');
    }
}
exports.CreateSpecialistsProfessions1623468774990 = CreateSpecialistsProfessions1623468774990;
