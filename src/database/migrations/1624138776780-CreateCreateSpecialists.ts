import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCreateSpecialists1624138776780 implements MigrationInterface {
    name = 'CreateCreateSpecialists1624138776780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialists" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "specialists" ADD CONSTRAINT "UQ_17b10ae1f97222b65fcb3d2dc40" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "specialists" ADD CONSTRAINT "FK_17b10ae1f97222b65fcb3d2dc40" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialists" DROP CONSTRAINT "FK_17b10ae1f97222b65fcb3d2dc40"`);
        await queryRunner.query(`ALTER TABLE "specialists" DROP CONSTRAINT "UQ_17b10ae1f97222b65fcb3d2dc40"`);
        await queryRunner.query(`ALTER TABLE "specialists" DROP COLUMN "userId"`);
    }

}
