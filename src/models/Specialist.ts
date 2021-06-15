import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Profession from "./Profession";
import Role from "./Role";
import Service from "./Service";


@Entity("specialists")
class Specialist {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    registro: string;

    @Column()
    name: string;

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

    @ManyToOne(() => Profession, profession => profession.specialists)
    profession: Profession[]
    
    @ManyToMany(() => Role)
    @JoinTable({
        name: "specialists_roles",
        joinColumns: [{ name: "specialist_id" }],
        inverseJoinColumns: [{ name: "role_id" }]
    })
    roles: Role[]

}

export default Specialist;