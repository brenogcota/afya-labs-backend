"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ClientRepository_1 = __importDefault(require("../repositories/ClientRepository"));
const ServiceRepository_1 = __importDefault(require("../repositories/ServiceRepository"));
const SpecialistRepository_1 = __importDefault(require("../repositories/SpecialistRepository"));
class ServiceController {
    async create(request, response) {
        const serviceRepository = typeorm_1.getCustomRepository(ServiceRepository_1.default);
        const specialistRepository = typeorm_1.getCustomRepository(SpecialistRepository_1.default);
        const clientRepository = typeorm_1.getCustomRepository(ClientRepository_1.default);
        const { dataAgendamento, dataAtendimento, horaAtendimento, valor, status, client, specialist } = request.body;
        const existsSpecialist = await specialistRepository.findOne(specialist);
        const existsClient = await clientRepository.findOne(client);
        if (!existsSpecialist) {
            return response.status(404).json({ message: 'Specialist does not exist!' });
        }
        if (!existsClient) {
            return response.status(404).json({ message: 'Client does not exist!' });
        }
        const service = serviceRepository.create({
            dataAgendamento,
            dataAtendimento,
            horaAtendimento,
            valor,
            status,
            client: existsClient,
            specialist: existsSpecialist
        });
        await serviceRepository.save(service);
        return response.status(200).json(service);
    }
}
exports.default = new ServiceController;
