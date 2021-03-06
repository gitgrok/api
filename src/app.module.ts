import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrepService } from '@onivoro/server-git';
import {  
  GitgrokServerConfig,  
} from './configs/gitgrok-server.config';
import { QueryController } from './controllers/query.controller';
import { RepoController } from './controllers/repo.controller';
import { SearchController } from './controllers/search.controller';
import { EntitiesModule } from './modules/db-typeorm/entities.module';
import { InitService } from './services/init.service';
import { PathManager } from './services/path-manager';
import { QueryService } from './services/query.service';
import { RepoService } from './services/repo.service';
import { ResultTransformer } from './services/result-transformer';
import { SearchService } from './services/search.service';

@Module({})
export class AppModule {
  static forRoot(dbConfig: any) {
    return {
      imports: [EntitiesModule.forFun(), TypeOrmModule.forRoot(dbConfig)],
      controllers: [RepoController, QueryController, SearchController],
      providers: [
        RepoService,
        PathManager,
        ResultTransformer,
        GitgrokServerConfig,       
        QueryService,
        GrepService,
        SearchService,
        InitService
      ],
      module: AppModule,
    };
  }
}
