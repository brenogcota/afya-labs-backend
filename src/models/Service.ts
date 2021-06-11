import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("services")
class Service {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    dataAgendamento: Date;

    @Column()
    dataAtendimento: Date;

    @Column()
    horaAtendimento: Date;

    @Column()
    valor: Number;

    @CreateDateColumn()
    created_at: Date;
}

export default Service;