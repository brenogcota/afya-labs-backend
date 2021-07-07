import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../repositories/ClientRepository';
import ServiceRepository from '../repositories/ServiceRepository';
import SpecialistRepository from '../repositories/SpecialistRepository';

class ServiceController {
    
    async create(request: Request, response: Response){

        const serviceRepository = getCustomRepository(ServiceRepository);
        const specialistRepository = getCustomRepository(SpecialistRepository);
        const clientRepository = getCustomRepository(ClientRepository);

        const { dataAgendamento, dataAtendimento, horaAtendimento, valor, status, client, specialist } = request.body;

        const existsSpecialist = await specialistRepository.findOne(specialist);        

        const existsClient = await clientRepository.findOne(client);

        if(!existsSpecialist){
            return response.status(404).json({ message: 'Specialist does not exist!' })
        }

        if(!existsClient){
            return response.status(404).json({ message: 'Client does not exist!'})
        } 

        const service = serviceRepository.create({
            dataAgendamento,
            dataAtendimento,
            horaAtendimento,
            valor,
            status,
            client: existsClient,
            specialist: existsSpecialist
        });

        await serviceRepository.save(service);
        //existsClient.services.indexOf(service);
        return response.status(200).json(service);
    }

}

export default new ServiceController;