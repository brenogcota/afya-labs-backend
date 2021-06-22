"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCreateRoles1624138127788 = void 0;
class CreateCreateRoles1624138127788 {
    constructor() {
        this.name = 'CreateCreateRoles1624138127788';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_permission_permissions" ("rolesId" uuid NOT NULL, "permissionsId" uuid NOT NULL, CONSTRAINT "PK_4d1112dfbc0eeaf7d826f79814d" PRIMARY KEY ("rolesId", "permissionsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_73f2f11e89b97ee6abfa93cf18" ON "roles_permission_permissions" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_339aded292782562ce8163ce40" ON "roles_permission_permissions" ("permissionsId") `);
        await queryRunner.query(`CREATE TABLE "users_roles_roles" ("usersId" uuid NOT NULL, "rolesId" uuid NOT NULL, CONSTRAINT "PK_6c1a055682c229f5a865f2080c1" PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_df951a64f09865171d2d7a502b" ON "users_roles_roles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b2f0366aa9349789527e0c36d9" ON "users_roles_roles" ("rolesId") `);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" ADD CONSTRAINT "FK_73f2f11e89b97ee6abfa93cf185" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" ADD CONSTRAINT "FK_339aded292782562ce8163ce409" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_roles_roles" ADD CONSTRAINT "FK_df951a64f09865171d2d7a502b1" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_roles_roles" ADD CONSTRAINT "FK_b2f0366aa9349789527e0c36d97" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users_roles_roles" DROP CONSTRAINT "FK_b2f0366aa9349789527e0c36d97"`);
        await queryRunner.query(`ALTER TABLE "users_roles_roles" DROP CONSTRAINT "FK_df951a64f09865171d2d7a502b1"`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" DROP CONSTRAINT "FK_339aded292782562ce8163ce409"`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" DROP CONSTRAINT "FK_73f2f11e89b97ee6abfa93cf185"`);
        await queryRunner.query(`DROP INDEX "IDX_b2f0366aa9349789527e0c36d9"`);
        await queryRunner.query(`DROP INDEX "IDX_df951a64f09865171d2d7a502b"`);
        await queryRunner.query(`DROP TABLE "users_roles_roles"`);
        await queryRunner.query(`DROP INDEX "IDX_339aded292782562ce8163ce40"`);
        await queryRunner.query(`DROP INDEX "IDX_73f2f11e89b97ee6abfa93cf18"`);
        await queryRunner.query(`DROP TABLE "roles_permission_permissions"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }
}
exports.CreateCreateRoles1624138127788 = CreateCreateRoles1624138127788;
