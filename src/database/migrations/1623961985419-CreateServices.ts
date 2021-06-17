import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateServices1623961985419 implements MigrationInterface {
    name = 'CreateServices1623961985419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "services_status_enum" AS ENUM('agendado', 'realizado', 'cancelado')`);
        await queryRunner.query(`CREATE TABLE "services" ("id" SERIAL NOT NULL, "dataAgendamento" TIMESTAMP NOT NULL, "dataAtendimento" TIMESTAMP NOT NULL, "horaAtendimento" TIMESTAMP NOT NULL, "valor" integer NOT NULL, "status" "services_status_enum" NOT NULL DEFAULT 'agendado', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, "specialistId" integer, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specialists_charts_history_charts_history" ("specialistsId" integer NOT NULL, "chartsHistoryId" integer NOT NULL, CONSTRAINT "PK_6105cbf8d2d43f36f694d54ed23" PRIMARY KEY ("specialistsId", "chartsHistoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ca516f2f8a2e89397157f307e1" ON "specialists_charts_history_charts_history" ("specialistsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_caaa09fc440baddfc8ec7cd5cf" ON "specialists_charts_history_charts_history" ("chartsHistoryId") `);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_31f2f6cdc217456fc9d0378309d" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_271780f1721bf0324e394ea0100" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_charts_history_charts_history" ADD CONSTRAINT "FK_ca516f2f8a2e89397157f307e17" FOREIGN KEY ("specialistsId") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_charts_history_charts_history" ADD CONSTRAINT "FK_caaa09fc440baddfc8ec7cd5cfc" FOREIGN KEY ("chartsHistoryId") REFERENCES "charts_history"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialists_charts_history_charts_history" DROP CONSTRAINT "FK_caaa09fc440baddfc8ec7cd5cfc"`);
        await queryRunner.query(`ALTER TABLE "specialists_charts_history_charts_history" DROP CONSTRAINT "FK_ca516f2f8a2e89397157f307e17"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_271780f1721bf0324e394ea0100"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_31f2f6cdc217456fc9d0378309d"`);
        await queryRunner.query(`DROP INDEX "IDX_caaa09fc440baddfc8ec7cd5cf"`);
        await queryRunner.query(`DROP INDEX "IDX_ca516f2f8a2e89397157f307e1"`);
        await queryRunner.query(`DROP TABLE "specialists_charts_history_charts_history"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TYPE "services_status_enum"`);
    }

}
