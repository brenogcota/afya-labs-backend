"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSevicesSpecialists1623468261505 = void 0;
const typeorm_1 = require("typeorm");
class CreateSevicesSpecialists1623468261505 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'services_specialists',
            columns: [
                { name: 'service_id', type: 'uuid' },
                { name: 'specialists_id', type: 'uuid' }
            ]
        }));
        await queryRunner.createForeignKey('services_specialists', new typeorm_1.TableForeignKey({
            columnNames: ['service_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'services',
            name: 'fk_services_specialists',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
        await queryRunner.createForeignKey('services_specialists', new typeorm_1.TableForeignKey({
            columnNames: ['specialists_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'specialists',
            name: 'fk_specialists_services',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL'
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('services_specialists', 'fk_services_specialists');
        await queryRunner.dropForeignKey('services_specialists', 'fk_specialists_services');
        await queryRunner.dropTable('services_specialists');
    }
}
exports.CreateSevicesSpecialists1623468261505 = CreateSevicesSpecialists1623468261505;
