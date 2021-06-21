"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const PermissionRepository_1 = __importDefault(require("../repositories/PermissionRepository"));
class PermissionController {
    async create(request, response) {
        const permissionRepository = typeorm_1.getCustomRepository(PermissionRepository_1.default);
        const { name, description } = request.body;
        const existPermission = await permissionRepository.findOne({ name });
        if (existPermission) {
            return response.status(400).json({ err: "Permission already exists" });
        }
        const permission = permissionRepository.create({
            name,
            description,
        });
        await permissionRepository.save(permission);
        return response.json(permission);
    }
}
exports.default = new PermissionController();
