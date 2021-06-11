"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBloodType1622918627252 = void 0;
const typeorm_1 = require("typeorm");
class CreateBloodType1622918627252 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'blood_types',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'tipo_sanguineo',
                    type: 'enum',
                    enum: ['a+', 'a-', 'b+', 'b-', 'o+', 'o-', 'ab+', 'ab-'],
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("blood_types");
    }
}
exports.CreateBloodType1622918627252 = CreateBloodType1622918627252;
