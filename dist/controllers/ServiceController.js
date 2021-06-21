"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ServiceRepository_1 = __importDefault(require("../repositories/ServiceRepository"));
const SpecialistRepository_1 = __importDefault(require("../repositories/SpecialistRepository"));
class ServiceController {
    async create(request, response) {
        const serviceRepository = typeorm_1.getCustomRepository(ServiceRepository_1.default);
        const specialistRepository = typeorm_1.getCustomRepository(SpecialistRepository_1.default);
        const { dataAgendamento, dataAtendimento, horaAtendimento, valor, client, specialist } = request.body;
        const existsSpecialist = await specialistRepository.findByIds(specialist);
        const service = serviceRepository.create({
            dataAgendamento,
            dataAtendimento,
            horaAtendimento,
            valor,
            client,
            specialist: existsSpecialist,
        });
        await serviceRepository.save(service);
        return response.json(service);
    }
}
exports.default = new ServiceController();
