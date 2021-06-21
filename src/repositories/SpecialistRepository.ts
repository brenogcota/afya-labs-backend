import { EntityRepository, Repository } from "typeorm";
import Specialist from "../models/Specialist";


@EntityRepository(Specialist)
class SpecialistRepository extends Repository<Specialist> {}

export default SpecialistRepository;