import { EntityManager, EntityRepository, getManager, Repository } from "typeorm";
import Specialist from "../models/Specialist";


@EntityRepository(Specialist)
class SpecialistRepository extends Repository<Specialist> {

    async getSpecialistAndAddresses() {
        const manager = getManager();
        const specialists = await manager.query(`select *, specialists.name as name, professions.name as profession from specialists 
                                                    LEFT OUTER JOIN professions on professions.id = "professionId"
                                                    LEFT OUTER JOIN addresses on addresses."userId" = specialists."userId"
                                                `);

        return specialists;
    }
}

export default SpecialistRepository;