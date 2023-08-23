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
  
    @Column({nullable:true})
    fechaAlta: Date

    @Column({nullable:true})
    fechaBaja: Date

    @Column()
    foto: string

    @Column()
    qr: string

    @Column()
    observaciones: string

    // @Column()
    // propietario: number
  }
  