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

        const { registro, name, telefone, celular, email, profession, user, role } = request.body;

        const existSpecialist = await specialistRepository.findOne({registro});        

        const existUser = await userRepository.findOne(user, {relations: ["roles"]});

        const existsRoles = await roleRepository.findOne(role);
        
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
            user: existUser
        });

        /* const findByName = await specialistRepository.find(name);

        if(findByName) {
            return response.status(200).json(specialist)
        } */
       

        await specialistRepository.save(specialist);
        existUser.roles.push(existsRoles!);
        await userRepository.save(existUser);

        return response.status(200).json(specialist)
    }

    async index(request: Request, response: Response) {
        const specialistRepository = getCustomRepository(SpecialistRepository);

        const specialists = await specialistRepository.find();
        return response.status(200).json(specialists);
    }
}

export default new SpecialistController;