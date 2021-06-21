import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";



@Entity("permissions")
class Permission {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

}

export default Permission;