import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysql',
  database: 'placas-inteligentes-db',
  // logging: true, // muestra peticiones a la bd
  synchronize: true,
  entities: [],
})
