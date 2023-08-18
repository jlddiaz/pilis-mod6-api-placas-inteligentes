import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
  } from 'typeorm'
  
  @Entity()
  export class Especie extends BaseEntity {
    @PrimaryGeneratedColumn()
    idEspecie: number
  
    @Column()
    descripcion: string
  }