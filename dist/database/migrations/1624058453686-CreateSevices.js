"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSevices1624058453686 = void 0;
class CreateSevices1624058453686 {
    constructor() {
        this.name = 'CreateSevices1624058453686';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "services_status_enum" AS ENUM('agendado', 'realizado', 'cancelado')`);
        await queryRunner.query(`CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dataAgendamento" TIMESTAMP NOT NULL, "dataAtendimento" TIMESTAMP NOT NULL, "horaAtendimento" TIMESTAMP NOT NULL, "valor" integer NOT NULL, "status" "services_status_enum" NOT NULL DEFAULT 'agendado', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, "specialistId" uuid, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_31f2f6cdc217456fc9d0378309d" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_271780f1721bf0324e394ea0100" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_271780f1721bf0324e394ea0100"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_31f2f6cdc217456fc9d0378309d"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TYPE "services_status_enum"`);
    }
}
exports.CreateSevices1624058453686 = CreateSevices1624058453686;
