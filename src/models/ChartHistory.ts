import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
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
}

export default ChartHistory;