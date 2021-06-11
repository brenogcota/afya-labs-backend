"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClient1622905533462 = void 0;
const typeorm_1 = require("typeorm");
class CreateClient1622905533462 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'clients',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'cpf',
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
                    name: 'tipo_sanguineo',
                    type: 'varchar'
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
        await queryRunner.dropTable("clients");
    }
}
exports.CreateClient1622905533462 = CreateClient1622905533462;
