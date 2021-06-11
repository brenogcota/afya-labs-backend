import { EntityRepository, Repository } from "typeorm";
import Profession from "../models/Profession";


@EntityRepository(Profession)
class ProfessionRepository extends Repository<Profession> {}

export default ProfessionRepository;