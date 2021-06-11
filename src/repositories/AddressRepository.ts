import { EntityRepository, Repository } from "typeorm";
import Address from "../models/Address";


@EntityRepository(Address)
class AddressRepository extends Repository<Address> {}

export default AddressRepository;