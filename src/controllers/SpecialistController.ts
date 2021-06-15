import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import SpecialistRepository from '../repositories/SpecialistRepository';
import UserRepository from '../repositories/UserRepository';

class SpecialistController {
    
    async create(request: Request, response: Response){
        const specialistRepository = getCustomRepository(SpecialistRepository);
        const userRepository = getCustomRepository(UserRepository);
        
        const { registro, nome, telefone, celular, email, users } = request.body;

        const existSpecialist = await specialistRepository.findOne({registro});

        if(existSpecialist) {
            return response.status(400).json({ message: 'Specialist already exists!' })
        }

        const existsUsers = await userRepository.findByIds(users);

        const specialist = specialistRepository.create({
            registro,//encontrar um jeito de fazer a confirmação
            nome,
            telefone,
            celular,
            email,
            users: existsUsers
        })

        await specialistRepository.save(specialist);

        return response.status(201).json(specialist)
    }
}

export default new SpecialistController;