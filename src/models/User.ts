import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import Address from './Address';
import Client from './Client';
import Role from './Role';
import Specialist from './Specialist';

@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
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
    @JoinTable({
        name: "users_roles",
        joinColumns: [{ name: "user_id" }],
        inverseJoinColumns: [{ name: "role_id" }]
    })
    roles: Role[]

    @OneToOne(() => Client, client => client.users)
    clients: Client[]

    @OneToOne(() => Specialist, specialist => specialist.users)
    specialists: Specialist[]

    @OneToMany(() => Address, address => address.users)
    addresses: Address[]
}

export default User;