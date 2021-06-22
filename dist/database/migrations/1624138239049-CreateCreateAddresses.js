"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCreateAddresses1624138239049 = void 0;
class CreateCreateAddresses1624138239049 {
    constructor() {
        this.name = 'CreateCreateAddresses1624138239049';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying NOT NULL, "logradouro" character varying NOT NULL, "numero" character varying NOT NULL, "bairro" character varying NOT NULL, "localidade" character varying NOT NULL, "uf" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }
}
exports.CreateCreateAddresses1624138239049 = CreateCreateAddresses1624138239049;
