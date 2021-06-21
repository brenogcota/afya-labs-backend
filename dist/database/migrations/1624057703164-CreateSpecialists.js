"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecialists1624057703164 = void 0;
class CreateSpecialists1624057703164 {
    constructor() {
        this.name = 'CreateSpecialists1624057703164';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "specialists" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registro" character varying NOT NULL, "name" character varying NOT NULL, "telefone" character varying NOT NULL, "celular" character varying NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "professionId" uuid, CONSTRAINT "PK_4bd10b339bf051026c8b6543911" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specialists_chartsHist" ("chartsHist_id" uuid NOT NULL, "specialists_id" uuid NOT NULL, CONSTRAINT "PK_d4bf8e563c9dd2fd16c91ed8cfd" PRIMARY KEY ("chartsHist_id", "specialists_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_533d21454e899209586b6c4955" ON "specialists_chartsHist" ("chartsHist_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e7c7906c26ce2f74a908361279" ON "specialists_chartsHist" ("specialists_id") `);
        await queryRunner.query(`CREATE TABLE "specialists_roles_roles" ("specialistsId" uuid NOT NULL, "rolesId" uuid NOT NULL, CONSTRAINT "PK_bd537c0d8e29c50f4c2bc08b11b" PRIMARY KEY ("specialistsId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_012709485a261da7f76c9ab81f" ON "specialists_roles_roles" ("specialistsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_80d147ad19f3877e2c834d651b" ON "specialists_roles_roles" ("rolesId") `);
        await queryRunner.query(`CREATE TABLE "specialists_charts_history_charts_history" ("specialistsId" uuid NOT NULL, "chartsHistoryId" uuid NOT NULL, CONSTRAINT "PK_6105cbf8d2d43f36f694d54ed23" PRIMARY KEY ("specialistsId", "chartsHistoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ca516f2f8a2e89397157f307e1" ON "specialists_charts_history_charts_history" ("specialistsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_caaa09fc440baddfc8ec7cd5cf" ON "specialists_charts_history_charts_history" ("chartsHistoryId") `);
        await queryRunner.query(`ALTER TABLE "specialists" ADD CONSTRAINT "FK_d0af7d3d65a5c0dc4c2c9c4451c" FOREIGN KEY ("professionId") REFERENCES "professions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_chartsHist" ADD CONSTRAINT "FK_533d21454e899209586b6c49558" FOREIGN KEY ("chartsHist_id") REFERENCES "charts_history"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_chartsHist" ADD CONSTRAINT "FK_e7c7906c26ce2f74a9083612797" FOREIGN KEY ("specialists_id") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_roles_roles" ADD CONSTRAINT "FK_012709485a261da7f76c9ab81fd" FOREIGN KEY ("specialistsId") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_roles_roles" ADD CONSTRAINT "FK_80d147ad19f3877e2c834d651b4" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_charts_history_charts_history" ADD CONSTRAINT "FK_ca516f2f8a2e89397157f307e17" FOREIGN KEY ("specialistsId") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_charts_history_charts_history" ADD CONSTRAINT "FK_caaa09fc440baddfc8ec7cd5cfc" FOREIGN KEY ("chartsHistoryId") REFERENCES "charts_history"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "specialists_charts_history_charts_history" DROP CONSTRAINT "FK_caaa09fc440baddfc8ec7cd5cfc"`);
        await queryRunner.query(`ALTER TABLE "specialists_charts_history_charts_history" DROP CONSTRAINT "FK_ca516f2f8a2e89397157f307e17"`);
        await queryRunner.query(`ALTER TABLE "specialists_roles_roles" DROP CONSTRAINT "FK_80d147ad19f3877e2c834d651b4"`);
        await queryRunner.query(`ALTER TABLE "specialists_roles_roles" DROP CONSTRAINT "FK_012709485a261da7f76c9ab81fd"`);
        await queryRunner.query(`ALTER TABLE "specialists_chartsHist" DROP CONSTRAINT "FK_e7c7906c26ce2f74a9083612797"`);
        await queryRunner.query(`ALTER TABLE "specialists_chartsHist" DROP CONSTRAINT "FK_533d21454e899209586b6c49558"`);
        await queryRunner.query(`ALTER TABLE "specialists" DROP CONSTRAINT "FK_d0af7d3d65a5c0dc4c2c9c4451c"`);
        await queryRunner.query(`DROP INDEX "IDX_caaa09fc440baddfc8ec7cd5cf"`);
        await queryRunner.query(`DROP INDEX "IDX_ca516f2f8a2e89397157f307e1"`);
        await queryRunner.query(`DROP TABLE "specialists_charts_history_charts_history"`);
        await queryRunner.query(`DROP INDEX "IDX_80d147ad19f3877e2c834d651b"`);
        await queryRunner.query(`DROP INDEX "IDX_012709485a261da7f76c9ab81f"`);
        await queryRunner.query(`DROP TABLE "specialists_roles_roles"`);
        await queryRunner.query(`DROP INDEX "IDX_e7c7906c26ce2f74a908361279"`);
        await queryRunner.query(`DROP INDEX "IDX_533d21454e899209586b6c4955"`);
        await queryRunner.query(`DROP TABLE "specialists_chartsHist"`);
        await queryRunner.query(`DROP TABLE "specialists"`);
    }
}
exports.CreateSpecialists1624057703164 = CreateSpecialists1624057703164;
