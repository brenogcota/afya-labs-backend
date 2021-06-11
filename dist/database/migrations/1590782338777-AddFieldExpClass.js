"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddFieldExpClass1590782338777 {
    constructor() {
        this.name = 'AddFieldExpClass1590782338777';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "class" ADD "exp" integer NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "exp"`);
    }
}
exports.default = AddFieldExpClass1590782338777;
