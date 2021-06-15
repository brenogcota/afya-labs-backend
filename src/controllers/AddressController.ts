import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import AddressRepository from '../repositories/AddressRepository';
import ClientRepository from '../repositories/ClientRepository';


class AddressController {
    async create(request: Request, response: Response) {
        const addressRepository = getCustomRepository(AddressRepository);
        const clientRepository = getCustomRepository(ClientRepository);
        
        
        const { cep, logradouro, numero, bairro, localidade, uf, clients } = request.body;

        const existsClients = await clientRepository.findByIds(clients);

        const address = addressRepository.create({
            cep,
            logradouro,
            numero,
            bairro,
            localidade,
            uf,
            clients: existsClients
        });

        await addressRepository.save(address);

        return response.json(address);
    }
}

export default new AddressController();