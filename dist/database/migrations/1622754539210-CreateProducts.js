"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProducts1622754539210 = void 0;
const typeorm_1 = require("typeorm");
class CreateProducts1622754539210 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "products",
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
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("products");
    }
}
exports.CreateProducts1622754539210 = CreateProducts1622754539210;
