"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const RoleRepository_1 = __importDefault(require("../repositories/RoleRepository"));
class UserController {
    async create(request, response) {
        const userRepository = typeorm_1.getCustomRepository(UserRepository_1.default);
        const roleRepository = typeorm_1.getCustomRepository(RoleRepository_1.default);
        const { name, username, password, roles } = request.body;
        const existUser = await userRepository.findOne({ username });
        if (existUser) {
            return response.status(400).json({ message: 'User already exists!' });
        }
        const passwordHashed = await bcryptjs_1.hash(password, 8);
        // Verifica se existe
        const existsRoles = await roleRepository.findByIds(roles);
        const user = userRepository.create({
            name,
            username,
            password: passwordHashed,
            roles: existsRoles
        });
        await userRepository.save(user);
        delete user.password;
        return response.status(201).json(user);
    }
}
exports.default = new UserController;
