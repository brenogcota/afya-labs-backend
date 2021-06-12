import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import Client from './Client';
import Role from './Role';

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

    @OneToOne(() => Client)
    @JoinTable({
        name: 'users_clients',
        joinColumns: [{ name: 'user_id'}],
        inverseJoinColumns: [{ name: 'client_id'}]
    })
    clients: Client[]
}

export default User;