import { Column, CreateDateColumn, Entity,  OneToOne, JoinTable, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import User from "./User";

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

    @ManyToMany(() => User)
    @JoinTable({
        name: "users_specialists",
        joinColumns: [{ name: "specialist_id"}],
        inverseJoinColumns: [{ name: "user_id"}]
    })
    users: User[]

}

export default Specialist;