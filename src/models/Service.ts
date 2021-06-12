import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Client from "./Client";
import Specialist from "./Specialist";


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

    @ManyToOne(() => Client, client => client.services)
    client: Client[]

    @ManyToOne(() => Specialist, specialist => specialist.services)
    specialist: Specialist[]
}

export default Service;