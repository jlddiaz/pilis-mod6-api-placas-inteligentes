import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
  } from 'typeorm'
  
  @Entity()
  export class Raza extends BaseEntity {
    @PrimaryGeneratedColumn()
    idRaza: number
  
    @Column()
    descripcion: string

    @Column()
    idEspecie: number
     
  }