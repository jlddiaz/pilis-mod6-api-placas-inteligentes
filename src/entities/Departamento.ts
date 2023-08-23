import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
  } from 'typeorm'
  
  @Entity()
  export class Departamento extends BaseEntity {
    @PrimaryGeneratedColumn()
    idDepartamento: number
  
    @Column()
    descripcion: string
  
    // @Column()
    // idProvincia: number   
  }
  