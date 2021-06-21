import { EntityRepository, Repository } from "typeorm";
import Role from "../models/Role";


@EntityRepository(Role)
class RoleRepository extends Repository<Role> {

    findByName(name: string) {
        return this.findOne({ name });
    }
}

export default RoleRepository;