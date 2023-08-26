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

  @Column({ nullable: true })
  fechaAlta: Date

  @Column({ nullable: true })
  fechaBaja: Date

  @Column()
  foto: string

  @Column()
  qr: string

  @Column()
  observaciones: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => Perfil, (perfil) => perfil.objetos)
  @JoinColumn({ name: 'idPropietario' })
  perfil: Perfil
}
