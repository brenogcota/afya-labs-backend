"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AddressRepository_1 = __importDefault(require("../repositories/AddressRepository"));
class AddressController {
    async create(request, response) {
        const addressRepository = typeorm_1.getCustomRepository(AddressRepository_1.default);
        const { cep, logradouro, numero, bairro, localidade, uf } = request.body;
        const address = addressRepository.create({
            cep,
            logradouro,
            numero,
            bairro,
            localidade,
            uf
        });
        await addressRepository.save(address);
        return response.json(address);
    }
}
exports.default = new AddressController();
