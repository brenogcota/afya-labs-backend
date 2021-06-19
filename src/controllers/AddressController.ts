import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import AddressRepository from '../repositories/AddressRepository';
import UserRepository from '../repositories/UserRepository';


class AddressController {
    async create(request: Request, response: Response) {
        const addressRepository = getCustomRepository(AddressRepository);
        const userRepository = getCustomRepository(UserRepository);
        
        
        const { cep, logradouro, numero, bairro, localidade, uf, users } = request.body;

        const existsUsers = await userRepository.findByIds(users);

        const address = addressRepository.create({
            cep,
            logradouro,
            numero,
            bairro,
            localidade,
            uf,
            user: existsUsers
        });

        await addressRepository.save(address);

        return response.status(201).json(address);
    }
}

export default new AddressController();