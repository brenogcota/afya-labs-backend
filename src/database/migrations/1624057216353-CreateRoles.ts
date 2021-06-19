import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRoles1624057216353 implements MigrationInterface {
    name = 'CreateRoles1624057216353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_permission_permissions" ("rolesId" uuid NOT NULL, "permissionsId" uuid NOT NULL, CONSTRAINT "PK_4d1112dfbc0eeaf7d826f79814d" PRIMARY KEY ("rolesId", "permissionsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_73f2f11e89b97ee6abfa93cf18" ON "roles_permission_permissions" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_339aded292782562ce8163ce40" ON "roles_permission_permissions" ("permissionsId") `);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" ADD CONSTRAINT "FK_73f2f11e89b97ee6abfa93cf185" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" ADD CONSTRAINT "FK_339aded292782562ce8163ce409" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" DROP CONSTRAINT "FK_339aded292782562ce8163ce409"`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" DROP CONSTRAINT "FK_73f2f11e89b97ee6abfa93cf185"`);
        await queryRunner.query(`DROP INDEX "IDX_339aded292782562ce8163ce40"`);
        await queryRunner.query(`DROP INDEX "IDX_73f2f11e89b97ee6abfa93cf18"`);
        await queryRunner.query(`DROP TABLE "roles_permission_permissions"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
