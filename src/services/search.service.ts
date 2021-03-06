import { Injectable, Logger } from '@nestjs/common';
import { GrepService } from '@onivoro/server-git';
import { PathManager } from './path-manager';
import { RepoService } from './repo.service';
import { ResultTransformer } from './result-transformer';

@Injectable()
export class SearchService {
  logger = new Logger(SearchService.name);

  constructor(
    private repositorySvc: RepoService,
    private pathMgr: PathManager,
    private resultTformer: ResultTransformer,
    private readonly grepService: GrepService,
  ) {}

  searchV2(_payload: string, pathFilter: string) {
    return this.repositorySvc
      .list()
      .then((list) =>
        Promise.all(
          list.map(({ url }) => {
            const cwd = this.pathMgr.extractProjectDirFromUrl(url);
            return this.grepService
              .grepForLinesMatching(_payload, cwd, pathFilter)
              .then((lines) => this.resultTformer.transformV2(cwd, lines))
              .catch((e) => {
                this.logger.warn(e);
                return null;
              });
          }),
        ),
      )
      .then((results) => results.filter((r) => r));
  }
}
