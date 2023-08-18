import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
  } from 'typeorm'
  
  @Entity()
  export class Provincia extends BaseEntity {
    @PrimaryGeneratedColumn()
    idProvincia: number
  
    @Column()
    descripcion: string
     
  }
  