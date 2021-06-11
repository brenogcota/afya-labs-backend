import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import SpecialistRepository from '../repositories/SpecialistRepository';

class SpecialistController {
    
    async create(request: Request, response: Response){
        const specialistRepository = getCustomRepository(SpecialistRepository);

        const { registro, nome, telefone, celular, email } = request.body;

        const existSpecialist = await specialistRepository.findOne({registro});

        if(existSpecialist) {
            return response.status(400).json({ message: 'Specialist already exists!' })
        }

        const specialist = specialistRepository.create({
            registro,//encontrar um jeito de fazer a confirmação
            nome,
            telefone,
            celular,
            email
        })

        await specialistRepository.save(specialist);

        return response.status(201).json(specialist)
    }
}

export default new SpecialistController;