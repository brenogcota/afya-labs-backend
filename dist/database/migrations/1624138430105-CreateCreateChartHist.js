"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCreateChartHist1624138430105 = void 0;
class CreateCreateChartHist1624138430105 {
    constructor() {
        this.name = 'CreateCreateChartHist1624138430105';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "charts_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data" TIMESTAMP NOT NULL, "hora" TIMESTAMP NOT NULL, "descrição" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9f4f322ac8d28195e66b102036f" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "charts_history"`);
    }
}
exports.CreateCreateChartHist1624138430105 = CreateCreateChartHist1624138430105;
