import { EntityRepository, Repository } from "typeorm";
import Service from "../models/Service";


@EntityRepository(Service)
class ServiceRepository extends Repository<Service> {
    show(service: void) {
        throw new Error('Method not implemented.');
    }
    index(arg0: { dataAgendamento: any; dataAtendimento: any; horaAtendimento: any; valor: any; status: any; client: import("../models/Client").default; specialist: import("../models/Specialist").default; }) {
        throw new Error('Method not implemented.');
    }
}

export default ServiceRepository;