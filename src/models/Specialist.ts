import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ChartHistory from "./ChartHistory";
import Profession from "./Profession";
import Role from "./Role";
import Service from "./Service";
import User from "./User";


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

    @OneToOne(() => User, user => user.specialists)
    users: User[]

    @ManyToMany(() => ChartHistory)
    @JoinTable({
        name: "specialists_chartsHist",
        joinColumns: [{ name: "specialists_id" }],
        inverseJoinColumns: [{ name: "chartsHist_id" }]
    })
    charts_history: ChartHistory[]

}

export default Specialist;