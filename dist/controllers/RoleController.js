"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const RoleRepository_1 = __importDefault(require("../repositories/RoleRepository"));
const PermissionRepository_1 = __importDefault(require("../repositories/PermissionRepository"));
class RoleController {
    async create(request, response) {
        const roleRepository = typeorm_1.getCustomRepository(RoleRepository_1.default);
        const permissionRepository = typeorm_1.getCustomRepository(PermissionRepository_1.default);
        const { name, description, permissions } = request.body;
        const existRole = await roleRepository.findOne({ name });
        if (existRole) {
            return response.status(400).json({ err: "Role already exists" });
        }
        // Verificando se as permissões existem
        const existsPermissions = await permissionRepository.findByIds(permissions);
        const role = roleRepository.create({
            name,
            description,
            permission: existsPermissions,
        });
        await roleRepository.save(role);
        return response.json(role);
    }
}
exports.default = new RoleController();
