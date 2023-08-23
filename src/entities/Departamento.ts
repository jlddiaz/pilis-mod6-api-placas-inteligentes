import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import { Localidad } from './Localidad'
import { Provincia } from './Provincia'
  
  @Entity()
  export class Departamento extends BaseEntity {
    @PrimaryGeneratedColumn()
    idDepartamento: number
  
    @Column()
    descripcion: string
  
    /* El decorador `@OneToMany` se utiliza para definir una relación de uno a muchos entre la entidad
    `Departamento` y la entidad `Localidad`. */
    @OneToMany(() => Localidad, (localidad) => localidad.departamento)
    localidades: Localidad[]

    /* El fragmento de código define una relación de muchos a uno entre la entidad "Departamento" y la
    entidad "Provincia". */
    @ManyToOne(() => Provincia, (provincia) => provincia.departamentos)
    @JoinColumn({name:"idProvincia"})
    provincia: Provincia 
  
  }
  