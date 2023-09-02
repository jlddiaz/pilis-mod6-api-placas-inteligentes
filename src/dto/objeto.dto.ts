import { Perfil } from '../entities/Perfil'
import { Expose } from 'class-transformer'

export class ObjetoDTO {
//   @Expose()
//   idObjeto: number

  @Expose()
  foto: string

  @Expose()
  qr: string

  @Expose()
  observaciones: string

  @Expose()
  fechaAlta: Date

  @Expose()
  fechaBaja: Date

  @Expose()
  perfil: Perfil
}
