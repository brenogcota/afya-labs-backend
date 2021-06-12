import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Service from "./Service";

export enum Status{
    teste =  'agendado',
}

@Entity("service_status") 
class ServiceStatus { 
  
  @PrimaryGeneratedColumn()  
  id: string;

  @Column({
    name: 'action', type: 'enum', enum: Status, default: Status.teste})
  status: string;

  @OneToMany(() => Service, service => service.status)
  services: Service[]
}

export default ServiceStatus;