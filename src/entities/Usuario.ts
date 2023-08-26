import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Perfil } from './Perfil'

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  idUsuario: number

  @Column({ nullable: true })
  apellido: string

  @Column({ nullable: true })
  nombre: string

  @Column()
  mail: string

  @Column()
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(() => Perfil, (perfil) => perfil.usuario)
  perfil: Perfil
}
