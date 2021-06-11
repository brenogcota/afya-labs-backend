import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("charts")
class Chart {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    dataAbertura: Date;

    @Column()
    creatd_at: Date;
}

export default Chart;