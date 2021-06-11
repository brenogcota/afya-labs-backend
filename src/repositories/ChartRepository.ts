import { EntityRepository, Repository } from "typeorm";
import Chart from "../models/Chart";


@EntityRepository(Chart)
class ChartRepository extends Repository<Chart> {}

export default ChartRepository;