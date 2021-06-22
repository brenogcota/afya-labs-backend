"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ChartHistoryRepository_1 = __importDefault(require("../repositories/ChartHistoryRepository"));
class ChartHistoryController {
    async create(request, response) {
        const chartHistoryRepository = typeorm_1.getCustomRepository(ChartHistoryRepository_1.default);
        const { data, hora, descrição, charts } = request.body;
        // FALTA: verificar se prontuário do paciente já existe, caso exista concatenar com o histórico novo
        const chartHistory = chartHistoryRepository.create({
            data,
            hora,
            descrição,
            charts
        });
        await chartHistoryRepository.save(chartHistory);
        return response.json(chartHistory);
    }
}
exports.default = new ChartHistoryController();
