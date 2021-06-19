import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ChartHistory from "./ChartHistory";
import Profession from "./Profession";
import Role from "./Role";
import Service from "./Service";
import User from "./User";

@Entity("specialists")
class Specialist {

    @PrimaryGeneratedColumn('uuid')
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

    @OneToMany(() => Service, specialist => Specialist)
    services: Service[]

    @ManyToOne(type => Profession, specialists => Specialist)
    profession: Profession[]
    
    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[]

    @OneToOne(type => User, specialist => Specialist)
    @JoinColumn()
    user: User

    @ManyToMany(() => ChartHistory)
    @JoinTable()
    charts_history: ChartHistory[]

}

export default Specialist;