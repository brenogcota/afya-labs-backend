import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, Long, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Address from "./Address";
import TipoSanguineo from "./TipoSanguineo";

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

    @Column()
    tipo_sanguineo: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Address, address => address.client)
    @JoinTable({
        name: 'clients_addresses',
        joinColumns: [{ name: 'client_id'}],
        inverseJoinColumns: [{ name: 'address_id'}]
    })
    addresses: Address[]

    @ManyToOne(() => TipoSanguineo, blood_type => blood_type.clients)
    blood_types: TipoSanguineo[]
}

export default Client;