import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
  } from 'typeorm'
  
  @Entity()
  export class Usuario extends BaseEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number
  
    @Column()
    apellido: string

    @Column()
    nombre: string

    @Column()
    password: string

    @Column()
    mail: string

    @Column()
    foto: string

    @Column()
    telefono: string

    @Column()
    facebook: string

    @Column()
    instagram: string

    @Column()
    telegram: string

    @Column()
    fechaAlta: Date

    @Column()
    fechaBaja: Date

    @Column()
    calle: string

    @Column()
    numero: string

    @Column()
    activo: string

    @Column()
    latitud: string

    @Column()
    longitud: string

    @Column()
    idLocalidad: string
         
  }
