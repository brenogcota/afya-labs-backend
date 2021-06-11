"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const typeorm_1 = require("typeorm");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
async function decoder(request) {
    const authHeader = request.headers.authorization || "";
    const userRepository = typeorm_1.getCustomRepository(UserRepository_1.default);
    const [, token] = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ");
    const payload = jsonwebtoken_1.decode(token);
    const user = await userRepository.findOne(payload === null || payload === void 0 ? void 0 : payload.sub, { relations: ['roles'] });
    return user;
}
function is(role) {
    const roleAuthorized = async (request, response, next) => {
        const user = await decoder(request);
        const userRoles = user === null || user === void 0 ? void 0 : user.roles.map(role => role.name);
        const existsRoles = userRoles === null || userRoles === void 0 ? void 0 : userRoles.some(r => role.includes(r));
        if (existsRoles) {
            return next();
        }
        return response.status(401).json({ message: "Not authorized!" });
    };
    return roleAuthorized;
}
exports.is = is;
