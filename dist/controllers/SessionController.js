"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const typeorm_1 = require("typeorm");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const jsonwebtoken_1 = require("jsonwebtoken");
class SessionController {
    async create(request, response) {
        const { username, password } = request.body;
        const userRepository = typeorm_1.getCustomRepository(UserRepository_1.default);
        const user = await userRepository.findOne({ username }, { relations: ["roles"] });
        if (!user) {
            return response.status(400).json({ error: "User not found!" });
        }
        //criptografando a senha obtida do request.body e comparando com a que tá no banco
        const matchPassword = await bcryptjs_1.compare(password, user.password);
        if (!matchPassword) {
            return response.status(400).json({ error: "Incorrect password or username" });
        }
        const roles = user.roles.map((role) => role.name);
        const token = jsonwebtoken_1.sign({ roles }, "bfe9fa08d3470aa6bc8ff596f5347b0c", {
            subject: user.id,
            expiresIn: '1d'
        }); // params (payload = os dados que desejamos que fiquem armazedos no token, hash = a chave secreta, )
        request.user_id = user.id;
        return response.json({
            token,
            user
        });
    }
}
exports.default = new SessionController;
