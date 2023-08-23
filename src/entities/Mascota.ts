import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import { Usuario } from './Usuario'
import { Raza } from './Raza'
  
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

    /* El decorador `@ManyToOne` se utiliza para definir una relación de muchos a uno entre dos
    entidades en TypeORM. En este caso se trata de definir una relación entre la entidad `Mascota` y
    la entidad `Usuario`. */
    @ManyToOne(() => Usuario, (usuario) => usuario.mascotas)
    @JoinColumn({name:"idResponsable"})
    usuario: Usuario

    /* El decorador `@ManyToOne` se utiliza para definir una relación de muchos a uno entre dos
    entidades en TypeORM. En este caso, se trata de definir una relación entre la entidad `Mascota`
    y la entidad `Raza`. */
    @ManyToOne(() => Raza, (raza) => raza.mascotas)
    @JoinColumn({name:"idRaza"})
    raza: Raza
  }