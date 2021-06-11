import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


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