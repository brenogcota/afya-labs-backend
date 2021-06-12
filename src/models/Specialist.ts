import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Service from "./Service";


@Entity("specialists")
class Specialist {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    registro: string;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    celular: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Service, service => service.client)
    @JoinTable({
        name: 'services_specialists',
        joinColumns: [{ name: 'specialists_id'}],
        inverseJoinColumns: [{ name: 'service_id'}]
    })
    services: Service[]

}

export default Specialist;