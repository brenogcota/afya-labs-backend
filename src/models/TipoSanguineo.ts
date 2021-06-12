import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Client from "./Client";

enum TipoSanguineoEnum {
  a = 'a+',
  b = 'a-',
  c = 'b+', 
  d = 'b-',
  e = 'o+',
  f = 'o-',
  g = 'ab+',
  h = 'ab-'
}

export enum TipoDoSangue{
  teste =  'teste',
  testea= 'testea'
}

@Entity("blood_types") 
export default class TipoSanguineo { 
  
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({
    name: 'action', type: 'enum', enum: TipoDoSangue, default: TipoDoSangue.teste})
  tipo_sanguineo: string;

  @OneToMany(() => Client, client => client.blood_types)
  clients: Client[]
}