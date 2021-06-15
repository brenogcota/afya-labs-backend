"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddress1622997312783 = void 0;
const typeorm_1 = require("typeorm");
class CreateAddress1622997312783 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "addresses",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'cep',
                    type: 'varchar'
                },
                {
                    name: 'logradouro',
                    type: 'varchar'
                },
                {
                    name: 'numero',
                    type: 'varchar'
                },
                {
                    name: 'bairro',
                    type: 'varchar'
                },
                {
                    name: 'localidade',
                    type: 'varchar'
                },
                {
                    name: 'uf',
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
        await queryRunner.dropTable("adresses");
    }
}
exports.CreateAddress1622997312783 = CreateAddress1622997312783;
