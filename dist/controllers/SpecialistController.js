"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const RoleRepository_1 = __importDefault(require("../repositories/RoleRepository"));
//import ProfessionRepository from '../repositories/ProfessionRepository';
const SpecialistRepository_1 = __importDefault(require("../repositories/SpecialistRepository"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
class SpecialistController {
    async create(request, response) {
        const specialistRepository = typeorm_1.getCustomRepository(SpecialistRepository_1.default);
        const userRepository = typeorm_1.getCustomRepository(UserRepository_1.default);
        const roleRepository = typeorm_1.getCustomRepository(RoleRepository_1.default);
        const { registro, name, telefone, celular, email, profession, user, role } = request.body;
        const existSpecialist = await specialistRepository.findOne({ registro });
        const existUser = await userRepository.findOne(user, { relations: ["roles"] });
        const existsRoles = await roleRepository.findOne(role);
        if (existSpecialist) {
            return response.status(400).json({ message: 'Specialist already exists!' });
        }
        if (!existUser) {
            return response.status(404).json({ message: 'User does not exist!' });
        }
        const specialist = specialistRepository.create({
            registro,
            name,
            telefone,
            celular,
            email,
            profession,
            user: existUser
        });
        /* const findByName = await specialistRepository.find(name);

        if(findByName) {
            return response.status(200).json(specialist)
        } */
        await specialistRepository.save(specialist);
        existUser.roles.push(existsRoles);
        await userRepository.save(existUser);
        return response.status(200).json(specialist);
    }
}
exports.default = new SpecialistController;
