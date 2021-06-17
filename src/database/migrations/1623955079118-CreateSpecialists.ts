import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSpecialists1623955079118 implements MigrationInterface {
    name = 'CreateSpecialists1623955079118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specialists" ("id" SERIAL NOT NULL, "registro" character varying NOT NULL, "name" character varying NOT NULL, "telefone" character varying NOT NULL, "celular" character varying NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4bd10b339bf051026c8b6543911" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specialists_roles" ("specialist_id" integer NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_f61a1eccc51038219360ffbe928" PRIMARY KEY ("specialist_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_244223c0757433554bd0ae36ea" ON "specialists_roles" ("specialist_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b132e9ea034dc78b983316e563" ON "specialists_roles" ("role_id") `);
        await queryRunner.query(`ALTER TABLE "specialists_roles" ADD CONSTRAINT "FK_244223c0757433554bd0ae36ea6" FOREIGN KEY ("specialist_id") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_roles" ADD CONSTRAINT "FK_b132e9ea034dc78b983316e5632" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialists_roles" DROP CONSTRAINT "FK_b132e9ea034dc78b983316e5632"`);
        await queryRunner.query(`ALTER TABLE "specialists_roles" DROP CONSTRAINT "FK_244223c0757433554bd0ae36ea6"`);
        await queryRunner.query(`DROP INDEX "IDX_b132e9ea034dc78b983316e563"`);
        await queryRunner.query(`DROP INDEX "IDX_244223c0757433554bd0ae36ea"`);
        await queryRunner.query(`DROP TABLE "specialists_roles"`);
        await queryRunner.query(`DROP TABLE "specialists"`);
    }

}
