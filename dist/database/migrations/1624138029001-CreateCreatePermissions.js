"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCreatePermissions1624138029001 = void 0;
class CreateCreatePermissions1624138029001 {
    constructor() {
        this.name = 'CreateCreatePermissions1624138029001';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "permissions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "permissions"`);
    }
}
exports.CreateCreatePermissions1624138029001 = CreateCreatePermissions1624138029001;
