import { Sequelize } from 'sequelize-typescript';
import { User } from '../../modules/users/user.entity';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      // SWITCH CASE: to define which config to use
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }

      const sequelize = new Sequelize(config); // Registering config to Sequelize
      sequelize.addModels([User]); // adding models to sequelize
      await sequelize.sync(); // sync the added models
      return sequelize; // return the instance
    },
  },
];
