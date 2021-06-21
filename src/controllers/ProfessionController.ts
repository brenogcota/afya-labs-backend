import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ProfessionRepository from '../repositories/ProfessionRepository';

class ProfessionController {
    async create(request: Request, response: Response){
        const professionRepository = getCustomRepository(ProfessionRepository);

        const { name } = request.body;

        const existProfession = await professionRepository.findOne({name});

        if(existProfession) {
            return response.status(400).json({ message: 'Profession already exists!' })
        }

        const profession = professionRepository.create({
            name
        })

        await professionRepository.save(profession);

        return response.json(profession);
    }

}

export default new ProfessionController;