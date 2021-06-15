import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, Long, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Address from "./Address";
import User from "./User";

@Entity("clients")
class Client {

    @PrimaryGeneratedColumn()
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

    @Column()
    tipo_sanguineo: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => User)
    @JoinTable({
        name: "users_clients",
        joinColumns: [{ name: "client_id"}],
        inverseJoinColumns: [{ name: "user_id"}]
    })
    users: User[]
}

export default Client;