import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Chart from "./Chart";
import Specialist from "./Specialist";


@Entity("charts_history")
class ChartHistory {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    data: Date;

    @Column()
    hora: Date;

    @Column()
    descrição: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Specialist)
    @JoinTable({
        name: "specialists_chartsHist",
        joinColumns: [{ name: "chartsHist_id" }],
        inverseJoinColumns: [{ name: "specialists_id" }]
    })
    specialists: Specialist[]

    @OneToMany(() => Chart, charts_history => ChartHistory)
    charts: Chart[]
}

export default ChartHistory;