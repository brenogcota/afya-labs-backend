import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Client from "./Client";


export enum TipoDoSangue{
  teste =  'teste',
}

@Entity("blood_types") 
export default class TipoSanguineo { 
  
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
  name: 'action', type: 'enum', enum: TipoDoSangue, default: TipoDoSangue.teste})
  tipo_sanguineo: string;

  @OneToMany(() => Client, client => client.tipo_sanguineo)
  clients: Client[]
}