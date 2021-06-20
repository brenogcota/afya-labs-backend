import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCreateClients1624137878449 implements MigrationInterface {
    name = 'CreateCreateClients1624137878449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "telefone" character varying NOT NULL, "celular" character varying NOT NULL, "email" character varying NOT NULL, "tipo_sanguineo" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "usersId" uuid, CONSTRAINT "REL_e93c9451f9622cde0fbb65155c" UNIQUE ("usersId"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_e93c9451f9622cde0fbb65155c0" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_e93c9451f9622cde0fbb65155c0"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
