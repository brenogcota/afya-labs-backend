"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessions1623440418276 = void 0;
const typeorm_1 = require("typeorm");
class CreateProfessions1623440418276 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'professions',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'nome',
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
        await queryRunner.dropTable('professions');
    }
}
exports.CreateProfessions1623440418276 = CreateProfessions1623440418276;
