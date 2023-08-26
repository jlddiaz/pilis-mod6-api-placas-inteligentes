import { DataSource } from 'typeorm'
import { Departamento } from './entities/Departamento'
import { Provincia } from './entities/Provincia'
import { Especie } from './entities/Especie'
import { Localidad } from './entities/Localidad'
import { Mascota } from './entities/Mascota'
import { Objeto } from './entities/Objeto'
import { Raza } from './entities/Raza'
import { Perfil } from './entities/Perfil'
import { Usuario } from './entities/Usuario'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysql',
  database: 'placas-inteligentes-db',
  // logging: true, // muestra peticiones a la bd
  synchronize: true,
  entities: [
    Departamento,
    Especie,
    Localidad,
    Mascota,
    Objeto,
    Provincia,
    Raza,
    Perfil,
    Usuario
  ],
})
