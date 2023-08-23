import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany
  } from 'typeorm'
import { Raza } from './Raza'
  
  @Entity()
  export class Especie extends BaseEntity {
    @PrimaryGeneratedColumn()
    idEspecie: number
  
    @Column()
    descripcion: string

    /* El decorador `@OneToMany(() => Raza, (raza) => raza.especie)` se utiliza para definir una
    relación de uno a muchos entre la entidad `Especie` y la entidad `Raza`. */
    @OneToMany(() => Raza, (raza) => raza.especie)
    razas: Raza[]  
  }