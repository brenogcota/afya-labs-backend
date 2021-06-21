"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ClassRepository_1 = __importDefault(require("../repositories/ClassRepository"));
class ClassController {
    async index(req, res, next) {
        const repository = typeorm_1.getCustomRepository(ClassRepository_1.default);
        res.status(200).json(await repository.find());
    }
    async store(req, res, next) {
        try {
            const repository = typeorm_1.getCustomRepository(ClassRepository_1.default);
            const data = await repository.save(req.body);
            return res.status(201).json(data);
        }
        catch (err) {
            const error = new Error('an error occurred');
            return next(error);
        }
    }
    async show(req, res, next) {
        const name = req.params.name;
        try {
            const repository = typeorm_1.getCustomRepository(ClassRepository_1.default);
            const data = await repository.findByName(name);
            if (!data) {
                const error = new Error('an error occurred');
                return next(error.message);
            }
            return res.status(200).json(data);
        }
        catch (err) {
            const error = new Error('an error occurred: ' + err);
            return next(error.message);
        }
    }
}
exports.default = ClassController;
