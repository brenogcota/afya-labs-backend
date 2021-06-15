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

        if(existClient) {
            return response.status(400).json({ message: 'Client already exists!' })
        }

        const existsUsers = await userRepository.findByIds(users);

        const client = clientRepository.create({
            name,
            cpf,
            telefone,
            celular,
            email,
            tipo_sanguineo,
            users: existsUsers
        });

        await clientRepository.save(client);

        return response.status(201).json(client);
    }
}

export default new ClientController;