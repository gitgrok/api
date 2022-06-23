import { Injectable } from '@nestjs/common';
import { parse } from 'path';
import { GitgrokServerConfig } from '../configs/gitgrok-server.config';

@Injectable()
export class PathManager {
  constructor(
    private readonly config: GitgrokServerConfig    
  ) {}

  getManifestPath() {    
    return this.config.manifestPath.value;
  }

  getHomeDirectory(scmProviderPath?: string): string {
    return `${this.config.homePath.value}/${scmProviderPath || ''}/`.replace(
      '//',
      '/',
    );
  }

  extractDirToConeInFromUrl(url: string): string {
    return parse(`${this.config.homePath.value}/${url.split('https://')[1]}`).dir;
  }

  extractProjectDirFromUrl(url: string): string {
    const dir = this.extractDirToConeInFromUrl(url);
    const segments = url.split('/');
    return `${dir}/${segments[segments.length - 1].replace('.git', '')}`;
  }
}
