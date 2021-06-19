import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ChartHistoryRepository from '../repositories/ChartHistoryRepository';


class ChartHistoryController {
    async create(request: Request, response: Response){
        const chartHistoryRepository = getCustomRepository(ChartHistoryRepository);

        const { data, hora, descrição, charts } = request.body;


        // FALTA: verificar se prontuário do paciente já existe, caso exista concatenar com o histórico novo


        const chartHistory = chartHistoryRepository.create({
            data,
            hora,
            descrição
        });

        await chartHistoryRepository.save(chartHistory);

        return response.json(chartHistory);
    }

}

export default new ChartHistoryController()