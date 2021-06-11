import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("charts")
class Chart {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    dataAbertura: Date;

    @CreateDateColumn()
    created_at: Date;
}

export default Chart;