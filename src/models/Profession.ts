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

    @OneToMany(type => Specialist, profession => Profession) //, { eager: true }
    specialists: Specialist[]
}

export default Profession;