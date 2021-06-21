import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCreateCharts1624138528740 implements MigrationInterface {
    name = 'CreateCreateCharts1624138528740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "charts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dataAbertura" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, "chartsHistoryId" uuid, CONSTRAINT "PK_fa7124425552d2d37725307008b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "charts" ADD CONSTRAINT "FK_b5ccd00ecc587e25cfaf58042c2" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "charts" ADD CONSTRAINT "FK_745190a4c9d7395b64894102980" FOREIGN KEY ("chartsHistoryId") REFERENCES "charts_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charts" DROP CONSTRAINT "FK_745190a4c9d7395b64894102980"`);
        await queryRunner.query(`ALTER TABLE "charts" DROP CONSTRAINT "FK_b5ccd00ecc587e25cfaf58042c2"`);
        await queryRunner.query(`DROP TABLE "charts"`);
    }

}
