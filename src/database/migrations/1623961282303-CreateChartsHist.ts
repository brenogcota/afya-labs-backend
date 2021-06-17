import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateChartsHist1623961282303 implements MigrationInterface {
    name = 'CreateChartsHist1623961282303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "charts_history" ("id" SERIAL NOT NULL, "data" TIMESTAMP NOT NULL, "hora" TIMESTAMP NOT NULL, "descrição" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9f4f322ac8d28195e66b102036f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specialists_chartsHist" ("chartsHist_id" integer NOT NULL, "specialists_id" integer NOT NULL, CONSTRAINT "PK_d4bf8e563c9dd2fd16c91ed8cfd" PRIMARY KEY ("chartsHist_id", "specialists_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_533d21454e899209586b6c4955" ON "specialists_chartsHist" ("chartsHist_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e7c7906c26ce2f74a908361279" ON "specialists_chartsHist" ("specialists_id") `);
        await queryRunner.query(`ALTER TABLE "charts" ADD "chartsHistoryId" integer`);
        await queryRunner.query(`ALTER TABLE "charts" ADD CONSTRAINT "FK_745190a4c9d7395b64894102980" FOREIGN KEY ("chartsHistoryId") REFERENCES "charts_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_chartsHist" ADD CONSTRAINT "FK_533d21454e899209586b6c49558" FOREIGN KEY ("chartsHist_id") REFERENCES "charts_history"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_chartsHist" ADD CONSTRAINT "FK_e7c7906c26ce2f74a9083612797" FOREIGN KEY ("specialists_id") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialists_chartsHist" DROP CONSTRAINT "FK_e7c7906c26ce2f74a9083612797"`);
        await queryRunner.query(`ALTER TABLE "specialists_chartsHist" DROP CONSTRAINT "FK_533d21454e899209586b6c49558"`);
        await queryRunner.query(`ALTER TABLE "charts" DROP CONSTRAINT "FK_745190a4c9d7395b64894102980"`);
        await queryRunner.query(`ALTER TABLE "charts" DROP COLUMN "chartsHistoryId"`);
        await queryRunner.query(`DROP INDEX "IDX_e7c7906c26ce2f74a908361279"`);
        await queryRunner.query(`DROP INDEX "IDX_533d21454e899209586b6c4955"`);
        await queryRunner.query(`DROP TABLE "specialists_chartsHist"`);
        await queryRunner.query(`DROP TABLE "charts_history"`);
    }

}
