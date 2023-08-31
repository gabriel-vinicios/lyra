import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorageController } from './storage/storage.controller';
import { ModelController } from './model/model.controller';
import { ChromaDbService } from './chroma-db/chroma-db.service';

@Module({
  imports: [],
  controllers: [AppController, StorageController, ModelController],
  providers: [AppService, ChromaDbService],
})
export class AppModule {}
