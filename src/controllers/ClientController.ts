import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../repositories/ClientRepository';
import RoleRepository from '../repositories/RoleRepository';
import UserRepository from '../repositories/UserRepository';

class ClientController {

    async create(request: Request, response: Response){
        const clientRepository = getCustomRepository(ClientRepository);
        const userRepository = getCustomRepository(UserRepository);
        const roleRepository = getCustomRepository(RoleRepository);

        const { name, cpf, telefone, celular, email, tipo_sanguineo, users, role } = request.body;

        const existClient = await clientRepository.findOne({cpf});
        const existUser = await userRepository.findOne(users, {relations: ["roles"]});
        const existRoles = await roleRepository.findOne(role);

        console.log(existRoles)
        console.log(existUser)

        if(existClient) {
            return response.status(400).json({ message: 'Client already exist!' })
        }

        if(!existUser) {
            return response.status(404).json({ message: 'User does not exist!' })
        }

        const client = clientRepository.create({
            name,
            cpf,
            telefone,
            celular,
            email,
            tipo_sanguineo,
            users: existUser,
        });

        await clientRepository.save(client);
        // existUser.roles.push(existRoles!);
        // await userRepository.save(existUser);

        return response.status(201).json({client: client, user: existUser});
    }
}

export default new ClientController;