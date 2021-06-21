import { EntityRepository, Repository } from "typeorm";
import Service from "../models/Service";


@EntityRepository(Service)
class ServiceRepository extends Repository<Service> {}

export default ServiceRepository;