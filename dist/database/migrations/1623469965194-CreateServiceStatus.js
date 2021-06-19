"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceStatus1623469965194 = void 0;
const typeorm_1 = require("typeorm");
class CreateServiceStatus1623469965194 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'service_status',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'status',
                    type: 'enum',
                    enum: ['agendado', 'realizado', 'cancelado'],
                    isNullable: false
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
        await queryRunner.dropTable("service_status");
    }
}
exports.CreateServiceStatus1623469965194 = CreateServiceStatus1623469965194;
