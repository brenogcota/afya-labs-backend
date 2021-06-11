import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("charts")
class Chart {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    dataAbertura: Date;

    @Column()
    created_at: Date;
}

export default Chart;