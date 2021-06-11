import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import AddressRepository from '../repositories/AddressRepository';


class AddressController {
    async create(request: Request, response: Response) {
        const addressRepository = getCustomRepository(AddressRepository);

        
        const { cep, logradouro, numero, bairro, localidade, uf } = request.body;

        const address = addressRepository.create({
            cep,
            logradouro,
            numero,
            bairro,
            localidade,
            uf
        });

        await addressRepository.save(address);

        return response.json(address);
    }
}

export default new AddressController();