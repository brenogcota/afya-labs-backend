"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1624056993072 = void 0;
class CreateUsers1624056993072 {
    constructor() {
        this.name = 'CreateUsers1624056993072';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateUsers1624056993072 = CreateUsers1624056993072;
