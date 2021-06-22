"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCreateProfessions1624138328726 = void 0;
class CreateCreateProfessions1624138328726 {
    constructor() {
        this.name = 'CreateCreateProfessions1624138328726';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "professions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9247c0d4b30fc6b796d59262058" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "professions"`);
    }
}
exports.CreateCreateProfessions1624138328726 = CreateCreateProfessions1624138328726;
