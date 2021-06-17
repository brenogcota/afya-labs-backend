import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Client from "./Client";
//import ServiceStatus from "./ServiceStatus";
import Specialist from "./Specialist";

export enum Status {
    AGENDADO = "agendado",
    REALIZADO = "realizado",
    CANCELADO = "cancelado"
}


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
    
    @Column({
        type: "enum",
        enum: Status,
        default: Status.AGENDADO
    })
    status: Status;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Client, services => Service)
    client: Client

    @ManyToOne(() => Specialist, specialists => Specialist)
    specialist: Specialist

}

export default Service;