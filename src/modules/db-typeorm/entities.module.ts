import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repo } from './entities/repo.entity';
import { RepoRepository } from './repositories/repo.repository';

const providers = [RepoRepository];

@Module({})
export class EntitiesModule {
  static forFun() {
    return {
      imports: [TypeOrmModule.forFeature([Repo])],
      providers: [...providers],
      module: EntitiesModule,
      exports: [TypeOrmModule, ...providers],
    };
  }
}
