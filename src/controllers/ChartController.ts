import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ChartRepository from '../repositories/ChartRepository';


class ChartController {
    async create(request: Request, response: Response) {
        const chartRepository = getCustomRepository(ChartRepository);

        const { dataAbertura } = request.body;

        const chart = chartRepository.create({
            dataAbertura
        })

        await chartRepository.save(chart);

        return response.json(chart);
    }
}

export default new ChartController();