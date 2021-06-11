import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ServiceRepository from '../repositories/ServiceRepository';


class ServiceController {
    async create(request: Request, response: Response) {

        const serviceRepository = getCustomRepository(ServiceRepository);

        const { dataAgendamento, dataAtendimento, horaAtendimento, valor } = request.body;


        // verificar se o atendimento já existe e se o horário do especialista já está comprometido


        const service = serviceRepository.create({
            dataAgendamento,
            dataAtendimento,
            horaAtendimento,
            valor
        });

        await serviceRepository.save(service);

        return response.json(service);
    }
}

export default new ServiceController();