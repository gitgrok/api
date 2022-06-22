import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrepService } from '@onivoro/server-git';
import {
  GitGrokPort,
  GitgrokServerConfig,
  HomePath,
  ManifestPath,
} from './configs/gitgrok-server.config';
import { QueryController } from './controllers/query.controller';
import { RepoController } from './controllers/repo.controller';
import { EntitiesModule } from './modules/db-typeorm/entities.module';
import { PathManager } from './services/path-manager';
import { QueryService } from './services/query.service';
import { RepoService } from './services/repo.service';
import { ResultTransformer } from './services/result-transformer';

@Module({})
export class AppModule {
  static forRoot(dbConfig: any) {
    return {
      imports: [EntitiesModule.forFun(), TypeOrmModule.forRoot(dbConfig)],
      controllers: [RepoController, QueryController],
      providers: [
        RepoService,
        PathManager,
        ResultTransformer,
        GitgrokServerConfig,
        ManifestPath,
        GitGrokPort,
        HomePath,
        QueryService,
        GrepService,
      ],
      module: AppModule,
    };
  }
}
