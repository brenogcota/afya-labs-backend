import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../repositories/ClientRepository';
import UserRepository from '../repositories/UserRepository';

class ClientController {

    async create(request: Request, response: Response){
        const clientRepository = getCustomRepository(ClientRepository);
        const userRepository = getCustomRepository(UserRepository);

        const { name, cpf, telefone, celular, email, tipo_sanguineo, users } = request.body;

        const existClient = await clientRepository.findOne({cpf});

        const existUser = await userRepository.findOne(users);

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

        return response.status(201).json(client);
    }
}

export default new ClientController;