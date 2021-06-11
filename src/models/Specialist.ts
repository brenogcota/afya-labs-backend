import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

    @Column()
    created_at: string;

}

export default Specialist;