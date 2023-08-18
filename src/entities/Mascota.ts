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

    @Column()
    vacunas: number

    @Column()
    fechaNacimiento: Date

    @Column()
    fechaFallecimiento: number

    @Column()
    foto: string

    @Column()
    qr: string

    @Column()
    observaciones: string

    @Column()
    idRaza: number

    @Column()
    idResponsable: number
  }