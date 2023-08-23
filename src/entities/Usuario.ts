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
  
    @Column({nullable:true})
    apellido: string

    @Column({nullable:true})
    nombre: string

    @Column()
    password: string

    @Column()
    mail: string

    @Column({nullable:true})
    foto: string

    @Column({nullable:true})
    telefono: string

    @Column({nullable:true})
    facebook: string

    @Column({nullable:true})
    instagram: string

    @Column({nullable:true})
    telegram: string

    @Column({nullable:true})
    fechaAlta: Date

    @Column({nullable:true})
    fechaBaja: Date

    @Column({nullable:true})
    calle: string

    @Column({nullable:true})
    numero: string

    @Column({nullable:true})
    activo: string

    @Column({nullable:true})
    latitud: string

    @Column({nullable:true})
    longitud: string

    // @Column()
    // idLocalidad: string
         
  }
