import { Expose, Exclude } from "class-transformer";

export class UsuarioResponseDTO{
    @Expose()
    idUsuario: number 

    @Expose()
    mail: string
  
    // @Expose()
    // createdAt: Date
  
    // @Expose()
    // updatedAt: Date
  }