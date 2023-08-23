import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany
  } from 'typeorm'
import { Departamento } from './Departamento'
  
  @Entity()
  export class Provincia extends BaseEntity {
    @PrimaryGeneratedColumn()
    idProvincia: number
  
    @Column()
    descripcion: string
     
    /* El decorador `@OneToMany` se utiliza para definir una relación de uno a muchos entre dos
    entidades en TypeORM. En este caso, se trata de definir una relación de uno a muchos entre la
    entidad `Provincia` y la entidad `Departamento`. */
    @OneToMany(() => Departamento, (departamento) => departamento.provincia)
    departamentos: Provincia[]
  }
  