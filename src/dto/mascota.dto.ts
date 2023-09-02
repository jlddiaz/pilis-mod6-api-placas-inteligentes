import { Perfil } from '../entities/Perfil';
import { Raza } from '../entities/Raza';
import { Expose } from "class-transformer";

export class MascotaDTO{
    // @Expose()
    // idUsuario: number 

    @Expose()
    mail: string
  
    @Expose()
    nombre: string
  
    @Expose()
    sexo: string
  
    @Expose()
    vacunas: string
  
    @Expose()
    fechaNacimiento: Date

    @Expose()
    foto: string
  
    @Expose()
    qr: string
  
    @Expose()
    observaciones: string

    @Expose()
    perfil: Perfil

    @Expose()
    raza: Raza
  }