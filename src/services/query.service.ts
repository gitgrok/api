import { Injectable, Logger } from '@nestjs/common';
import { GrepService } from '@onivoro/server-git';
import { PathManager } from './path-manager';
import { RepoService } from './repo.service';
import { ResultTransformer } from './result-transformer';

@Injectable()
export class QueryService {
  list() {
    return Promise.resolve(['one', 'two', 'three']);
  }

  logger = new Logger(QueryService.name);

  constructor(
    private repositorySvc: RepoService,
    private pathMgr: PathManager,
    private resultTformer: ResultTransformer,
    private readonly grepService: GrepService,
  ) {}
}
