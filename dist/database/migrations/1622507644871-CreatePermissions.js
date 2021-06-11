"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissions1622503438565 = void 0;
const typeorm_1 = require("typeorm");
class CreatePermissions1622503438565 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "permissions",
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
        await queryRunner.dropTable("permissions");
    }
}
exports.CreatePermissions1622503438565 = CreatePermissions1622503438565;
