"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissions1624057150634 = void 0;
class CreatePermissions1624057150634 {
    constructor() {
        this.name = 'CreatePermissions1624057150634';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "permissions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "permissions"`);
    }
}
exports.CreatePermissions1624057150634 = CreatePermissions1624057150634;
