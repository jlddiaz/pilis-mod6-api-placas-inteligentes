import { Expose, Exclude } from "class-transformer";
import { Perfil } from "../entities/Perfil";

export class UsuarioResponseDTO{
    @Expose()
    idUsuario: number 

    @Expose()
    mail: string

    @Expose()
    perfil: Perfil
  
    // @Expose()
    // createdAt: Date
  
    // @Expose()
    // updatedAt: Date
  }