import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import { Usuario } from './Usuario'
  
  @Entity()
  export class Objeto extends BaseEntity {
    @PrimaryGeneratedColumn()
    idObjeto: number
  
    @Column({nullable:true})
    fechaAlta: Date

    @Column({nullable:true})
    fechaBaja: Date

    @Column()
    foto: string

    @Column()
    qr: string

    @Column()
    observaciones: string

    /* El fragmento de código `@ManyToOne(() => Usuario, (usuario) => usuario.objects)` define una
    relación de muchos a uno entre la entidad `Objeto` y la entidad `Usuario`. */
    @ManyToOne(() => Usuario, (usuario) => usuario.objetos)
    @JoinColumn({name:"idPropietario"})
    usuario: Usuario    
  }
  