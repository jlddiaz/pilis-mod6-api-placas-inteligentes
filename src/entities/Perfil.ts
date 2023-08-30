import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Mascota } from './Mascota'
import { Objeto } from './Objeto'
import { Localidad } from './Localidad'
import { Usuario } from './Usuario'

@Entity()
export class Perfil extends BaseEntity {
  @PrimaryGeneratedColumn()
  idPerfil: number

  @Column()
  apellido: string

  @Column()
  nombre: string

  @Column({ nullable: true })
  foto: string

  @Column()
  telefono: string

  @Column({ nullable: true })
  direccion: string

  @Column({ default: true })
  activo: string

  @Column({ nullable: true })
  latitud: string

  @Column({ nullable: true })
  longitud: string

  @Column({ nullable: true })
  facebook: string

  @Column({ nullable: true })
  instagram: string

  @Column({ nullable: true })
  telegram: string

  @Column({ nullable: true })
  fechaAlta: Date

  @Column({ nullable: true })
  fechaBaja: Date 

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => Mascota, (mascota) => mascota.perfil)
  mascotas: Mascota[]

  @OneToMany(() => Objeto, (objeto) => objeto.perfil)
  objetos: Objeto[]

  @ManyToOne(() => Localidad, (localidad) => localidad.perfiles)
  @JoinColumn({ name: 'idLocalidad' })
  localidad: Localidad

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario
}
