"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ChartRepository_1 = __importDefault(require("../repositories/ChartRepository"));
class ChartController {
    async create(request, response) {
        const chartRepository = typeorm_1.getCustomRepository(ChartRepository_1.default);
        const { dataAbertura } = request.body;
        const chart = chartRepository.create({
            dataAbertura
        });
        await chartRepository.save(chart);
        return response.json(chart);
    }
}
exports.default = new ChartController();
