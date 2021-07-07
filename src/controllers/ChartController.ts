import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ChartRepository from '../repositories/ChartRepository';
import ClientRepository from '../repositories/ClientRepository';


class ChartController {
    async create(request: Request, response: Response) {
        const chartRepository = getCustomRepository(ChartRepository);
        const clientRepository = getCustomRepository(ClientRepository);

        const { dataAbertura, client } = request.body;

        const existsClient = await clientRepository.findOne(client);
        
        if(!existsClient){
            return response.status(404).json({ message: 'Client does not exist!'})
        }

        const chart = chartRepository.create({
            dataAbertura,
            client
        })

        await chartRepository.save(chart);

        return response.json(chart);
    }
}

export default new ChartController();