import { Module } from '@nestjs/common';

import { databaseServices } from './database.service';

@Module({
  providers: [...databaseServices],
  exports: [...databaseServices], // Exporting the databaseServices to make it avalaible to the rest of application
})
export class DatabaseModule {}
