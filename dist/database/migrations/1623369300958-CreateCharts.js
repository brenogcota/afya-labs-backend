"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChart1623369300958 = void 0;
const typeorm_1 = require("typeorm");
class CreateChart1623369300958 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "charts",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'dataAbertura',
                    type: 'timestamp'
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
        await queryRunner.dropTable("charts");
    }
}
exports.CreateChart1623369300958 = CreateChart1623369300958;
