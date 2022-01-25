import { Injectable, Logger } from '@nestjs/common';
import { exec as execCb, execSync } from 'child_process';
import { resolve } from 'path';
import { PathManager } from './path-manager';
import { promisify } from 'util';
import { RepoRepository } from 'src/modules/db-typeorm/repositories/repo.repository';

const exec = (...args) => promisify(execCb).apply(null, ...args).then(r => r.stdout);

@Injectable()
export class RepoService {
  logger = new Logger(RepoService.name);

  openDir(dir: string) {
    return exec(`code ${dir}`);
  }

  openRepo(url: string) {
    const at = this.pathManager.extractProjectDirFromUrl(url);
    return exec(`code ${at}`);
  }

  get(url: string) {
    const dir = this.pathManager.extractProjectDirFromUrl(url);
    return exec(`ls ${dir}`);
  }

  constructor(
    private readonly pathManager: PathManager,
    private readonly repoRepository: RepoRepository
  ) { }

  list() {
    return this.repoRepository.get();
  }

  track(url: string) {
    this.logger.debug(url);
    this.clone(url)
    //.then(() => this.updateManifest(url));
    this.updateManifest(url);
  }

  private updateManifest(url) {
    this.repoRepository.put([{ url }])
  }

  private dedup(arr: string[]) {
    const output = {};
    arr.forEach((k) => {
      output[k] = 1;
    });
    return Object.keys(output);
  }

  private clone(url: string) {
    const cwd = this.pathManager.extractDirToConeInFromUrl(url);
    const project = this.pathManager.extractProjectDirFromUrl(url);
    const target = resolve(cwd, project);
    const cloneCmd = `git clone ${url} ${target}`;
    try {
      execSync(`cd ${cwd} && ${cloneCmd}`);
    } catch (e) {
      execSync(`mkdir -p ${cwd} && ${cloneCmd}`)
    }
  }
}
