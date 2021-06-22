"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AddressRepository_1 = __importDefault(require("../repositories/AddressRepository"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
class AddressController {
    async create(request, response) {
        const addressRepository = typeorm_1.getCustomRepository(AddressRepository_1.default);
        const userRepository = typeorm_1.getCustomRepository(UserRepository_1.default);
        const { cep, logradouro, numero, bairro, localidade, uf, users } = request.body;
        const existsUsers = await userRepository.findByIds(users);
        console.log(existsUsers);
        const address = addressRepository.create({
            cep,
            logradouro,
            numero,
            bairro,
            localidade,
            uf,
            user: existsUsers[0]
        });
        console.log(address);
        await addressRepository.save(address);
        return response.status(201).json(address);
    }
}
exports.default = new AddressController();
