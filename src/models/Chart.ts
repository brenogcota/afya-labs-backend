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

    @ManyToOne(() => Client, charts => Chart)
    client: Client

    @ManyToOne(() => ChartHistory, charts => Chart)
    charts_history: ChartHistory

}

export default Chart;