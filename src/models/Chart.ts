import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Client from "./Client";


@Entity("charts")
class Chart {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    dataAbertura: Date;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Client)
    @JoinTable({
        name: 'charts_clients',
        joinColumns: [{ name: 'chart_id'}],
        inverseJoinColumns: [{ name: 'client_id'}]
    })
    clients: Client[]
}

export default Chart;