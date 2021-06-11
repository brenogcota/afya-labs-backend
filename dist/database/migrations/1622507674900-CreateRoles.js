"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoles1622504847135 = void 0;
const typeorm_1 = require("typeorm");
class CreateRoles1622504847135 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "roles",
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
        await queryRunner.dropTable("roles");
    }
}
exports.CreateRoles1622504847135 = CreateRoles1622504847135;
