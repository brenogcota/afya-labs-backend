"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AddressRepository_1 = __importDefault(require("../repositories/AddressRepository"));
<<<<<<< HEAD
class AddressController {
    async create(request, response) {
        const addressRepository = typeorm_1.getCustomRepository(AddressRepository_1.default);
        const { cep, logradouro, numero, bairro, localidade, uf } = request.body;
=======
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
class AddressController {
    async create(request, response) {
        const addressRepository = typeorm_1.getCustomRepository(AddressRepository_1.default);
        const userRepository = typeorm_1.getCustomRepository(UserRepository_1.default);
        const { cep, logradouro, numero, bairro, localidade, uf, users } = request.body;
        const existsUsers = await userRepository.findByIds(users);
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
        const address = addressRepository.create({
            cep,
            logradouro,
            numero,
            bairro,
            localidade,
<<<<<<< HEAD
            uf
=======
            uf,
            user: existsUsers
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
        });
        await addressRepository.save(address);
        return response.json(address);
    }
}
exports.default = new AddressController();
