import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ChartHistory from "./ChartHistory";
import Client from "./Client";


@Entity("charts")
class Chart {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    dataAbertura: Date;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Client, client => client.charts)
    client: Client[]

    @ManyToOne(() => ChartHistory, chart_history => chart_history.charts)
    charts_history: ChartHistory[]

}

export default Chart;