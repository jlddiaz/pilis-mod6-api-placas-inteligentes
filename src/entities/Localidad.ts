import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
  } from 'typeorm'
  
  @Entity()
  export class Localidad extends BaseEntity {
    @PrimaryGeneratedColumn()
    idLocalidad: number
  
    @Column()
    descripcion: string

    // @Column()
    // idDepartamento: number
  }