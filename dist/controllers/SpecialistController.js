"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const SpecialistRepository_1 = __importDefault(require("../repositories/SpecialistRepository"));
class SpecialistController {
    async create(request, response) {
        const specialistRepository = typeorm_1.getCustomRepository(SpecialistRepository_1.default);
        const { registro, nome, telefone, celular, email } = request.body;
        const existSpecialist = await specialistRepository.findOne({ registro });
        if (existSpecialist) {
            return response.status(400).json({ message: 'Specialist already exists!' });
        }
        const specialist = specialistRepository.create({
            registro,
            nome,
            telefone,
            celular,
            email
        });
        await specialistRepository.save(specialist);
        return response.status(201).json(specialist);
    }
}
exports.default = new SpecialistController;
