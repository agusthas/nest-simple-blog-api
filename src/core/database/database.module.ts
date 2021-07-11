import { Module } from '@nestjs/common';

import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders], // Exporting the databaseServices to make it avalaible to the rest of application
})
export class DatabaseModule {}
