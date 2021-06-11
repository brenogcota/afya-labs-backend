import { EntityRepository, Repository } from "typeorm";
import Client from "../models/Client";


@EntityRepository(Client)
class ClientRepository extends Repository<Client> {}

export default ClientRepository;