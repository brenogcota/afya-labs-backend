import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateChartsHist1624057504742 implements MigrationInterface {
    name = 'CreateChartsHist1624057504742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "charts_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data" TIMESTAMP NOT NULL, "hora" TIMESTAMP NOT NULL, "descrição" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9f4f322ac8d28195e66b102036f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "charts_history"`);
    }

}
