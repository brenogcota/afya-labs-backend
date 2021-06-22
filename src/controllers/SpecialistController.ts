import { Request, Response } from 'express';
import { createQueryBuilder, EntityManager, getCustomRepository } from 'typeorm';
import ProfessionRepository from '../repositories/ProfessionRepository';
import RoleRepository from '../repositories/RoleRepository';
//import ProfessionRepository from '../repositories/ProfessionRepository';
import SpecialistRepository from '../repositories/SpecialistRepository';
import UserRepository from '../repositories/UserRepository';

class SpecialistController {
    
    async create(request: Request, response: Response){
        const specialistRepository = getCustomRepository(SpecialistRepository);
        const userRepository = getCustomRepository(UserRepository);
        const roleRepository = getCustomRepository(RoleRepository);
        const professionRepository = getCustomRepository(ProfessionRepository);

        const { registro, name, telefone, celular, email, profissao, user, role } = request.body;

        const existSpecialist = await specialistRepository.findOne({registro});        

        const existUser = await userRepository.findOne(user, {relations: ["roles"]});

        const existsRoles = await roleRepository.findOne(role);
        
        if(existSpecialist) {
            return response.status(400).json({ message: 'Specialist already exists!' })
        }

        if(!existUser) {
            return response.status(404).json({ message: 'User does not exist!' })
        }

        const newProfession = professionRepository.create({
            name: profissao
        });
        await professionRepository.save(newProfession);
        
        const specialist = specialistRepository.create({
            registro,//encontrar um jeito de fazer a confirmação
            name,
            telefone,
            celular,
            email,
            user: existUser,
            profession: newProfession
        });

        await specialistRepository.save(specialist);
        existUser.roles.push(existsRoles!);
        await userRepository.save(existUser);

        return response.status(201).json({ specialist: specialist, user: existUser });
    }

    async index(request: Request, response: Response) {
        const specialistRepository = getCustomRepository(SpecialistRepository,);
        const specialistsAndAdresses = await specialistRepository.getSpecialistAndAddresses();

        return response.status(200).json(specialistsAndAdresses);
    }
}

export default new SpecialistController;