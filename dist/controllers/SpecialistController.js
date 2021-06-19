"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const SpecialistRepository_1 = __importDefault(require("../repositories/SpecialistRepository"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
class SpecialistController {
    async create(request, response) {
        const specialistRepository = typeorm_1.getCustomRepository(SpecialistRepository_1.default);
        const userRepository = typeorm_1.getCustomRepository(UserRepository_1.default);
        const { registro, name, telefone, celular, email, users } = request.body;
        const existSpecialist = await specialistRepository.findOne({ registro });
        const findByName = await specialistRepository.findOne({ name });
        if (existSpecialist) {
            return response.status(400).json({ message: 'Specialist already exists!' });
        }
        const existsUsers = await userRepository.findByIds(users);
        const specialist = specialistRepository.create({
            registro,
            name,
            telefone,
            celular,
            email,
            users: existsUsers
        });
        if (findByName) {
            return response.status(200).json(specialist);
        }
        await specialistRepository.save(specialist);
        return response.status(201).json(specialist);
    }
}
exports.default = new SpecialistController;
