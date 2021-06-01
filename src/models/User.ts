import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column() // { select: false }
    password?: string;

    @CreateDateColumn()
    created_at: Date;
}

export default User;