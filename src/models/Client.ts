import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, Long, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Chart from "./Chart";
import Service from "./Service";
import User from "./User";

enum Tipos {
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-"
}

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

    @Column('int')
    tipo_sanguineo: Tipos

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Service, client => Client)
    services: Service[]
    
    @OneToOne(() => User, clients => Client)
    @JoinColumn()
    users: User

    @OneToMany(() => Chart, client => Client)
    charts: Chart[]
}

export default Client;