import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('professions')
class Profession {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nome: string;

    @CreateDateColumn()
    created_at: Date;

}

export default Profession;