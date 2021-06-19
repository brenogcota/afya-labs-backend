import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import Address from './Address';
import Client from './Client';
import Role from './Role';
import Specialist from './Specialist'; 

@Entity("users")
class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password?: string;

    @CreateDateColumn()
    created_at: Date;


    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[]

    @OneToOne(type => Client, users => User)
    clients: Client

    @OneToOne(type => Specialist, user => User)
    specialist: Specialist

    @OneToMany(() => Address, user => User)
    addresses: Address[]
}

export default User;