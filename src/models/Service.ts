import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Client from "./Client";
import Specialist from "./Specialist";

enum Status {
    "AGENDADO",
    "REALIZADO",
    "CANCELADO"
}


@Entity("services")
class Service {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    dataAgendamento: Date;

    @Column()
    dataAtendimento: Date;

    @Column()
    horaAtendimento: Date;

    @Column()
    valor: Number;
    
    @Column('int')
    status: Status;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Client, services => Service)
    client: Client

    @ManyToOne(() => Specialist, services => Service)
    specialist: Specialist

}

export default Service;