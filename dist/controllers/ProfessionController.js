"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ProfessionRepository_1 = __importDefault(require("../repositories/ProfessionRepository"));
class ProfessionController {
    async create(request, response) {
        const professionRepository = typeorm_1.getCustomRepository(ProfessionRepository_1.default);
        const { name } = request.body;
        const existProfession = await professionRepository.findOne({ name });
        if (existProfession) {
            return response.status(400).json({ message: 'Profession already exists!' });
        }
        const profession = professionRepository.create({
            name
        });
        await professionRepository.save(profession);
        return response.json(profession);
    }
}
exports.default = new ProfessionController;
