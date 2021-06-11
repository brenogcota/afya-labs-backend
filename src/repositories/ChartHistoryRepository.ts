import { EntityRepository, Repository } from "typeorm";
import ChartHistory from "../models/ChartHistory";


@EntityRepository(ChartHistory)
class ChartHistoryRepository extends Repository<ChartHistory> {}

export default ChartHistoryRepository;