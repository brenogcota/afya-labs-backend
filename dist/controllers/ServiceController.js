"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ServiceRepository_1 = __importDefault(require("../repositories/ServiceRepository"));
class ServiceController {
    async create(request, response) {
        const serviceRepository = typeorm_1.getCustomRepository(ServiceRepository_1.default);
        const { dataAgendamento, dataAtendimento, horaAtendimento, valor } = request.body;
        // verificar se o atendimento já existe e se o horário do especialista já está comprometido
        const service = serviceRepository.create({
            dataAgendamento,
            dataAtendimento,
            horaAtendimento,
            valor
        });
        await serviceRepository.save(service);
        return response.json(service);
    }
}
exports.default = new ServiceController();
