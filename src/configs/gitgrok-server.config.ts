import { Injectable } from '@nestjs/common';
import { Env, Parameter } from '@onivoro/server-parameterization';
import { resolve } from 'path';

@Env(String, 'GITGROK_MANIFEST')
class ManifestPath extends Parameter<string> {
  value = resolve('~/.gitgrok/.manifest');
}
@Env(String, 'GITGROK_HOME')
class HomePath extends Parameter<string> {
  value = resolve('~/.gitgrok');
}
@Env(String, 'GITGROK_PORT')
class GitGrokPort extends Parameter<string> {
  value = 7777;
}

@Injectable()
export class GitgrokServerConfig {
  manifestPath = new ManifestPath();
  homePath = new HomePath();
  port = new GitGrokPort();
  constructor(
    // public readonly manifestPath: ManifestPath,
    // public readonly homePath: HomePath,
    // public readonly port: GitGrokPort,
  ) { }
}
