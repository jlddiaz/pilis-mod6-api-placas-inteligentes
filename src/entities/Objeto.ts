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

@Entity()
export class Objeto extends BaseEntity {
  @PrimaryGeneratedColumn()
  idObjeto: number 

  @Column()
  nombre: string

  @Column()
  foto: string

  @Column({ nullable: true })
  qr: string

  @Column()
  observaciones: string

  @Column({ nullable: true })
  fechaAlta: Date

  @Column({ nullable: true })
  fechaBaja: Date
  
  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => Perfil, (perfil) => perfil.objetos)
  @JoinColumn({ name: 'idPropietario' })
  perfil: Perfil
}
