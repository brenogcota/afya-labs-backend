"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCreateSpecialists1624138776780 = void 0;
class CreateCreateSpecialists1624138776780 {
    constructor() {
        this.name = 'CreateCreateSpecialists1624138776780';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "specialists" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "specialists" ADD CONSTRAINT "UQ_17b10ae1f97222b65fcb3d2dc40" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "specialists" ADD CONSTRAINT "FK_17b10ae1f97222b65fcb3d2dc40" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "specialists" DROP CONSTRAINT "FK_17b10ae1f97222b65fcb3d2dc40"`);
        await queryRunner.query(`ALTER TABLE "specialists" DROP CONSTRAINT "UQ_17b10ae1f97222b65fcb3d2dc40"`);
        await queryRunner.query(`ALTER TABLE "specialists" DROP COLUMN "userId"`);
    }
}
exports.CreateCreateSpecialists1624138776780 = CreateCreateSpecialists1624138776780;
