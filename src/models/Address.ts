import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("adresses")
class Address {
    @PrimaryGeneratedColumn("uuid")
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

}

export default Address;