import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import { Mascota } from './Mascota'
import { Objeto } from './Objeto'
import { Localidad } from './Localidad'
  
  @Entity()
  export class Usuario extends BaseEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number
  
    @Column({nullable:true})
    apellido: string

    @Column({nullable:true})
    nombre: string

    @Column()
    password: string

    @Column()
    mail: string

    @Column({nullable:true})
    foto: string

    @Column({nullable:true})
    telefono: string

    @Column({nullable:true})
    facebook: string

    @Column({nullable:true})
    instagram: string

    @Column({nullable:true})
    telegram: string

    @Column({nullable:true})
    fechaAlta: Date

    @Column({nullable:true})
    fechaBaja: Date

    @Column({nullable:true})
    calle: string

    @Column({nullable:true})
    numero: string

    @Column({nullable:true})
    activo: string

    @Column({nullable:true})
    latitud: string

    @Column({nullable:true})
    longitud: string

    /* El decorador `@OneToMany(() => Mascota, (mascota) => mascota.usuario)` se utiliza para definir
    una relación de uno a muchos entre la entidad `Usuario` y la entidad `Mascota`. */
    @OneToMany(() => Mascota, (mascota) => mascota.usuario)
    mascotas: Mascota[]

    /* El decorador `@OneToMany(() => Objeto, (objeto) => object.user)` se utiliza para definir una
    relación de uno a muchos entre la entidad `Usuario` y la entidad `Objeto`. */
    @OneToMany(() => Objeto, (objeto) => objeto.usuario)
    objetos: Objeto[]

    @ManyToOne(() => Localidad, (localidad) => localidad.usuarios)
    @JoinColumn({name:"idLocalidad"})
    localidad: Localidad 
         
  }
