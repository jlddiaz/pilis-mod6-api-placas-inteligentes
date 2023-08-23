import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
    OneToMany,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import { Especie } from './Especie'
import { Mascota } from './Mascota'
  
  @Entity()
  export class Raza extends BaseEntity {
    @PrimaryGeneratedColumn()
    idRaza: number
  
    @Column()
    descripcion: string

    /* El decorador `@OneToMany` se utiliza para definir una relación de uno a muchos entre la entidad
    `Raza` y la entidad `Mascota`. */
    @OneToMany(() => Mascota, (mascota) => mascota.raza)
    mascotas: Mascota[]  

    /* El decorador `@ManyToOne` se utiliza para definir una relación de muchos a uno entre la entidad
    `Raza` y la entidad `Especie`. */
    @ManyToOne(() => Especie, (especia) => especia.razas)
    @JoinColumn({name:"idEspecie"})
    especie: Especie
  }