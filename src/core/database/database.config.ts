import * as dotenv from 'dotenv';

import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    passsword: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  test: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    passsword: process.env.DB_PASS,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  production: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    passsword: process.env.DB_PASS,
    database: process.env.DB_NAME_PRODUCTI0N,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
};
