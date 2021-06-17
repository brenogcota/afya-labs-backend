import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProfessions1623959843418 implements MigrationInterface {
    name = 'CreateProfessions1623959843418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professions" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9247c0d4b30fc6b796d59262058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "specialists" ADD "professionId" integer`);
        await queryRunner.query(`ALTER TABLE "specialists" ADD CONSTRAINT "FK_d0af7d3d65a5c0dc4c2c9c4451c" FOREIGN KEY ("professionId") REFERENCES "professions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialists" DROP CONSTRAINT "FK_d0af7d3d65a5c0dc4c2c9c4451c"`);
        await queryRunner.query(`ALTER TABLE "specialists" DROP COLUMN "professionId"`);
        await queryRunner.query(`DROP TABLE "professions"`);
    }

}
