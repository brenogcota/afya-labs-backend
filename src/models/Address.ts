import { JoinTable } from "typeorm";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ManyToMany } from "typeorm/decorator/relations/ManyToMany";
import Client from "./Client";


@Entity("addresses")
class Address {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;

    @Column()
    localidade: string;

    @Column()
    uf: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Client)
    @JoinTable({
        name: "clients_addresses",
        joinColumns: [{ name: "address_id"}],
        inverseJoinColumns: [{ name: "client_id"}]
    })
    clients: Client[]

}

export default Address;