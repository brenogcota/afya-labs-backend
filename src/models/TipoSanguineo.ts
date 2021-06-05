import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type tipoSanguineo =  'a+' |  'a-' | 'b+' | 'b-' | 'o+' | 'o-' | 'ab+' |  'ab-' 

@Entity("blood_types") 

export default class TipoSanguineo { 
  
  @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: [ 'a+',  'a-', 'b+', 'b-', 'o+', 'o-', 'ab+',  'ab-' ],
        default: 'a+'
    })
    role: tipoSanguineo;

}