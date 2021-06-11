"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ClientRepository_1 = __importDefault(require("../repositories/ClientRepository"));
class ClientController {
    async create(request, response) {
        const clientRepository = typeorm_1.getCustomRepository(ClientRepository_1.default);
        const { name, cpf, telefone, celular, email, tipo_sanguineo } = request.body;
        const existClient = await clientRepository.findOne({ cpf });
        if (existClient) {
            return response.status(400).json({ message: 'Client already exists!' });
        }
        const client = clientRepository.create({
            name,
            cpf,
            telefone,
            celular,
            email,
            tipo_sanguineo
        });
        await clientRepository.save(client);
        return response.status(201).json(client);
    }
}
exports.default = new ClientController;
