import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Specialist from "./Specialist";


@Entity('professions')
class Profession {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nome: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Specialist, specialist => specialist.profession)
    @JoinTable({
        name: 'specialists_professions',
        joinColumns: [{ name: 'professions_id'}],
        inverseJoinColumns: [{ name: 'specialists_id'}]
    })
    specialists: Specialist[]
}

export default Profession;