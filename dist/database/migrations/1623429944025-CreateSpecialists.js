"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecialists1623429944025 = void 0;
const typeorm_1 = require("typeorm");
class CreateSpecialists1623429944025 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "specialists",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'registro',
                    type: 'varchar'
                },
                {
                    name: 'nome',
                    type: 'varchar'
                },
                {
                    name: 'telefone',
                    type: 'varchar'
                },
                {
                    name: 'celular',
                    type: 'varchar'
                },
                {
                    name: 'email',
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
        await queryRunner.dropTable("specialists");
    }
}
exports.CreateSpecialists1623429944025 = CreateSpecialists1623429944025;
