import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { BaseRepository } from './base.repository';
import { Repo } from '../entities/repo.entity';

@Injectable()
export class RepoRepository extends BaseRepository<Repo> {
  protected getEntityType() {
    return Repo;
  }
  constructor(@InjectConnection() protected readonly connection: Connection) {
    super();
  }
}
