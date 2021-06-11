import { Column, CreateDateColumn, Entity, Long, PrimaryGeneratedColumn } from "typeorm";

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
}

export default Client;