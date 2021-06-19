import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import RoleRepository from '../repositories/RoleRepository';
//import ProfessionRepository from '../repositories/ProfessionRepository';
import SpecialistRepository from '../repositories/SpecialistRepository';
import UserRepository from '../repositories/UserRepository';

class SpecialistController {
    
    async create(request: Request, response: Response){
        const specialistRepository = getCustomRepository(SpecialistRepository);
        const userRepository = getCustomRepository(UserRepository);
        const roleRepository = getCustomRepository(RoleRepository);

        const { registro, name, telefone, celular, email, user, profession, roles } = request.body;

        const existSpecialist = await specialistRepository.findOne({registro});        

        const existUser = await userRepository.findOne(user);

        const existsRoles = await roleRepository.findByIds(roles);
        
        if(existSpecialist) {
            return response.status(400).json({ message: 'Specialist already exists!' })
        }

        if(!existUser) {
            return response.status(404).json({ message: 'User does not exist!' })
        }
        
        const specialist = specialistRepository.create({
            registro,//encontrar um jeito de fazer a confirmação
            name,
            telefone,
            celular,
            email,
            profession,
            roles: existsRoles,
            user: existUser
        });

        const findByName = await specialistRepository.find(name);

        if(findByName) {
            return response.status(200).json(specialist)
        }
       

        await specialistRepository.save(specialist);

        return response.status(201).json(specialist)
    }

    async index(request: Request, response: Response) {}
}

export default new SpecialistController;