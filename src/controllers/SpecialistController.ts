import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
//import ProfessionRepository from '../repositories/ProfessionRepository';
import SpecialistRepository from '../repositories/SpecialistRepository';

class SpecialistController {
    
    async create(request: Request, response: Response){
        const specialistRepository = getCustomRepository(SpecialistRepository);

        const { registro, name, telefone, celular, email } = request.body;

        const existSpecialist = await specialistRepository.findOne({name});


        const findByName = await specialistRepository.find({name});


        if(existSpecialist) {
            return response.status(400).json({ message: 'Specialist already exists!' })
        }

        
        const specialist = specialistRepository.create({
            registro,//encontrar um jeito de fazer a confirmação
            name,
            telefone,
            celular,
            email,
        });

        if(findByName) {
            return response.status(200).json(specialist)
        }

        await specialistRepository.save(specialist);

        return response.status(201).json(specialist)
    }
}

export default new SpecialistController;