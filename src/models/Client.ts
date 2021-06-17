import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, Long, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Address from "./Address";
import Chart from "./Chart";
import Service from "./Service";
import TipoSanguineo from "./TipoSanguineo";
import User from "./User";

@Entity("clients")
class Client {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column() // { select: false }
    telefone: string;

    @Column()
    celular: string;

    @Column()
    email: string;

    /* @Column()
    tipo_sanguineo: string; */

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => TipoSanguineo, tipo_sanguineo => tipo_sanguineo.clients)
    tipo_sanguineo: TipoSanguineo[]

    @OneToMany(() => Service, service => service.client)
    services: Service[]
    
    @OneToOne(() => User, user => user.clients)
    users: User[]

    @OneToMany(() => Chart, charts => charts.client)
    charts: Chart[]
}

export default Client;