import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCharts1623961153347 implements MigrationInterface {
    name = 'CreateCharts1623961153347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "charts" ("id" SERIAL NOT NULL, "dataAbertura" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "PK_fa7124425552d2d37725307008b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_permission_permissions" ("rolesId" uuid NOT NULL, "permissionsId" uuid NOT NULL, CONSTRAINT "PK_4d1112dfbc0eeaf7d826f79814d" PRIMARY KEY ("rolesId", "permissionsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_73f2f11e89b97ee6abfa93cf18" ON "roles_permission_permissions" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_339aded292782562ce8163ce40" ON "roles_permission_permissions" ("permissionsId") `);
        await queryRunner.query(`CREATE TABLE "specialists_roles_roles" ("specialistsId" integer NOT NULL, "rolesId" uuid NOT NULL, CONSTRAINT "PK_bd537c0d8e29c50f4c2bc08b11b" PRIMARY KEY ("specialistsId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_012709485a261da7f76c9ab81f" ON "specialists_roles_roles" ("specialistsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_80d147ad19f3877e2c834d651b" ON "specialists_roles_roles" ("rolesId") `);
        await queryRunner.query(`CREATE TABLE "users_roles_roles" ("usersId" uuid NOT NULL, "rolesId" uuid NOT NULL, CONSTRAINT "PK_6c1a055682c229f5a865f2080c1" PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_df951a64f09865171d2d7a502b" ON "users_roles_roles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b2f0366aa9349789527e0c36d9" ON "users_roles_roles" ("rolesId") `);
        await queryRunner.query(`ALTER TABLE "charts" ADD CONSTRAINT "FK_b5ccd00ecc587e25cfaf58042c2" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" ADD CONSTRAINT "FK_73f2f11e89b97ee6abfa93cf185" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" ADD CONSTRAINT "FK_339aded292782562ce8163ce409" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_roles_roles" ADD CONSTRAINT "FK_012709485a261da7f76c9ab81fd" FOREIGN KEY ("specialistsId") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialists_roles_roles" ADD CONSTRAINT "FK_80d147ad19f3877e2c834d651b4" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_roles_roles" ADD CONSTRAINT "FK_df951a64f09865171d2d7a502b1" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_roles_roles" ADD CONSTRAINT "FK_b2f0366aa9349789527e0c36d97" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_roles_roles" DROP CONSTRAINT "FK_b2f0366aa9349789527e0c36d97"`);
        await queryRunner.query(`ALTER TABLE "users_roles_roles" DROP CONSTRAINT "FK_df951a64f09865171d2d7a502b1"`);
        await queryRunner.query(`ALTER TABLE "specialists_roles_roles" DROP CONSTRAINT "FK_80d147ad19f3877e2c834d651b4"`);
        await queryRunner.query(`ALTER TABLE "specialists_roles_roles" DROP CONSTRAINT "FK_012709485a261da7f76c9ab81fd"`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" DROP CONSTRAINT "FK_339aded292782562ce8163ce409"`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" DROP CONSTRAINT "FK_73f2f11e89b97ee6abfa93cf185"`);
        await queryRunner.query(`ALTER TABLE "charts" DROP CONSTRAINT "FK_b5ccd00ecc587e25cfaf58042c2"`);
        await queryRunner.query(`DROP INDEX "IDX_b2f0366aa9349789527e0c36d9"`);
        await queryRunner.query(`DROP INDEX "IDX_df951a64f09865171d2d7a502b"`);
        await queryRunner.query(`DROP TABLE "users_roles_roles"`);
        await queryRunner.query(`DROP INDEX "IDX_80d147ad19f3877e2c834d651b"`);
        await queryRunner.query(`DROP INDEX "IDX_012709485a261da7f76c9ab81f"`);
        await queryRunner.query(`DROP TABLE "specialists_roles_roles"`);
        await queryRunner.query(`DROP INDEX "IDX_339aded292782562ce8163ce40"`);
        await queryRunner.query(`DROP INDEX "IDX_73f2f11e89b97ee6abfa93cf18"`);
        await queryRunner.query(`DROP TABLE "roles_permission_permissions"`);
        await queryRunner.query(`DROP TABLE "charts"`);
    }

}
