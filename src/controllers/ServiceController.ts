import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ServiceRepository from '../repositories/ServiceRepository';
import SpecialistRepository from '../repositories/SpecialistRepository';


class ServiceController {
    async create(request: Request, response: Response) {

        const serviceRepository = getCustomRepository(ServiceRepository);
        const specialistRepository = getCustomRepository(SpecialistRepository);

        const { dataAgendamento, dataAtendimento, horaAtendimento, valor, client, specialist } = request.body;

        const existsSpecialist = await specialistRepository.findByIds(specialist)


        const service = serviceRepository.create({
            dataAgendamento,
            dataAtendimento,
            horaAtendimento,
            valor,
            client,
            specialist: existsSpecialist,
        });

        await serviceRepository.save(service);

        return response.json(service);
    }
}

export default new ServiceController();