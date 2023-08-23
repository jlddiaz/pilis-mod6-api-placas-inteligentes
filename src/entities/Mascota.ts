import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
  } from 'typeorm'
  
  @Entity()
  export class Mascota extends BaseEntity {
    @PrimaryGeneratedColumn()
    idMascota: number
  
    @Column()
    nombre: string

    @Column()
    sexo: string

    @Column({nullable:true})
    vacunas: number

    @Column({nullable:true})
    fechaNacimiento: Date

    @Column({nullable:true})
    fechaFallecimiento: number

    @Column({nullable:true})
    foto: string

    @Column({nullable:true})
    qr: string

    @Column({nullable:true})
    observaciones: string

    // @Column()
    // idRaza: number

    // @Column()
    // idResponsable: number
  }