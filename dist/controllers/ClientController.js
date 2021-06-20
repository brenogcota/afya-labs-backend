"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ClientRepository_1 = __importDefault(require("../repositories/ClientRepository"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
class ClientController {
    async create(request, response) {
        const clientRepository = typeorm_1.getCustomRepository(ClientRepository_1.default);
        const userRepository = typeorm_1.getCustomRepository(UserRepository_1.default);
        const { name, cpf, telefone, celular, email, tipo_sanguineo, users } = request.body;
        const existClient = await clientRepository.findOne({ cpf });
        const existUser = await userRepository.findOne(users);
        if (existClient) {
            return response.status(400).json({ message: 'Client already exist!' });
        }
        if (!existUser) {
            return response.status(404).json({ message: 'User does not exist!' });
        }
        const client = clientRepository.create({
            name,
            cpf,
            telefone,
            celular,
            email,
            tipo_sanguineo,
            users: existUser,
        });
        await clientRepository.save(client);
        return response.status(201).json(client);
    }
}
exports.default = new ClientController;
