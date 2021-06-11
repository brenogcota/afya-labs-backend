"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServices1623434085894 = void 0;
const typeorm_1 = require("typeorm");
class CreateServices1623434085894 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'services',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'dataAgendamento',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'dataAtendimento',
                    type: 'timestamp' // não sei se é a melhor forma
                },
                {
                    name: 'horaAtendimento',
                    type: 'timestamp'
                },
                {
                    name: 'valor',
                    type: 'varchar' // no diagrama estava indicando que era pra ser um typo Date???O.o
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("services");
    }
}
exports.CreateServices1623434085894 = CreateServices1623434085894;
