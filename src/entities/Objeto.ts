import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
  } from 'typeorm'
  
  @Entity()
  export class Objeto extends BaseEntity {
    @PrimaryGeneratedColumn()
    idObjeto: number
  
    @Column()
    fechaAlta: Date

    @Column()
    fechaBaja: Date

    @Column()
    foto: string

    @Column()
    qr: string

    @Column()
    observaciones: string

    @Column()
    propietario: number
  }
  