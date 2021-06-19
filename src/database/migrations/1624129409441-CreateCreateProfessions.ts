import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCreateProfessions1624129409441 implements MigrationInterface {
    name = 'CreateCreateProfessions1624129409441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_271780f1721bf0324e394ea0100"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "specialistId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" ADD "specialistId" uuid`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_271780f1721bf0324e394ea0100" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
