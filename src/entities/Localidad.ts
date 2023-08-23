import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import { Usuario } from './Usuario'
import { Departamento } from './Departamento'
  
  @Entity()
  export class Localidad extends BaseEntity {
    @PrimaryGeneratedColumn()
    idLocalidad: number
  
    @Column()
    descripcion: string

    /* El decorador `@OneToMany(() => Usuario, (usuario) => usuario.localidad)` se utiliza para definir
    una relación de uno a muchos entre la entidad `Localidad` y la entidad `Usuario`. */
    @OneToMany(() => Usuario, (usuario) => usuario.localidad)
    usuarios: Usuario[]

    /* El fragmento de código que proporcionó define una relación de muchos a uno entre la entidad
    `Localidad` y la entidad `Departamento` usando el decorador `@ManyToOne`. */
    @ManyToOne(() => Departamento, (departamento) => departamento.localidades)
    @JoinColumn({name:"idDepartamento"})
    departamento: Departamento 
  }