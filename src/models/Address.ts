import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => Client, client => client.addresses)
    client: Client[]

}

export default Address;