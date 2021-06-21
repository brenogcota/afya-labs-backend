"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessions1624057415069 = void 0;
class CreateProfessions1624057415069 {
    constructor() {
        this.name = 'CreateProfessions1624057415069';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "professions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9247c0d4b30fc6b796d59262058" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "professions"`);
    }
}
exports.CreateProfessions1624057415069 = CreateProfessions1624057415069;
