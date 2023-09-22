import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Perfil } from './Perfil'
import { Raza } from './Raza'

@Entity()
export class Mascota extends BaseEntity {
  @PrimaryGeneratedColumn()
  idMascota: number

  @Column()
  nombre: string

  @Column({ nullable: true })
  sexo: string

  @Column({ nullable: true })
  vacunas: string

  @Column({ nullable: true })
  edad:number

  // @Column({ nullable: true })
  // fechaFallecimiento: number

  @Column({ nullable: true })
  foto: string

  @Column({ nullable: true })
  qr: string

  @Column({ nullable: true })
  observaciones: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
  
  @ManyToOne(() => Perfil, (perfil) => perfil.mascotas)
  @JoinColumn({ name: 'idResponsable' })
  perfil: Perfil
  
  @ManyToOne(() => Raza, (raza) => raza.mascotas)
  @JoinColumn({ name: 'idRaza' })
  raza: Raza
}
