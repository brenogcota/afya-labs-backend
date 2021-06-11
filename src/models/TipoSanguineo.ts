import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  
  @PrimaryGeneratedColumn()
    id: string;

    @Column({
      name: 'action', type: 'enum', enum: TipoDoSangue, default: TipoDoSangue.teste})
    tipo_sanguineo: string;
}