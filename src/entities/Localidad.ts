import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Perfil } from './Perfil'
import { Departamento } from './Departamento'

@Entity()
export class Localidad extends BaseEntity {
  @PrimaryGeneratedColumn()
  idLocalidad: number

  @Column()
  descripcion: string

  
  @OneToMany(() => Perfil, (perfil) => perfil.localidad)
  perfiles: Perfil[]

  /* El fragmento de código que proporcionó define una relación de muchos a uno entre la entidad
    `Localidad` y la entidad `Departamento` usando el decorador `@ManyToOne`. */
  @ManyToOne(() => Departamento, (departamento) => departamento.localidades)
  @JoinColumn({ name: 'idDepartamento' })
  departamento: Departamento
}
