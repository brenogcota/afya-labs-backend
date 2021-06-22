"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCreateServices1624161524625 = void 0;
class CreateCreateServices1624161524625 {
    constructor() {
        this.name = 'CreateCreateServices1624161524625';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dataAgendamento" TIMESTAMP NOT NULL, "dataAtendimento" TIMESTAMP NOT NULL, "horaAtendimento" TIMESTAMP NOT NULL, "valor" integer NOT NULL, "status" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, "specialistId" uuid, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_31f2f6cdc217456fc9d0378309d" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_271780f1721bf0324e394ea0100" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_271780f1721bf0324e394ea0100"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_31f2f6cdc217456fc9d0378309d"`);
        await queryRunner.query(`DROP TABLE "services"`);
    }
}
exports.CreateCreateServices1624161524625 = CreateCreateServices1624161524625;
