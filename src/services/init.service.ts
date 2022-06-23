import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { GitgrokServerConfig } from "src/configs/gitgrok-server.config";
import { PathManager } from "./path-manager";
import { existsSync, writeFileSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';

@Injectable()
export class InitService implements OnModuleInit {
    logger = new Logger(InitService.name);

    constructor(private pathMgr: PathManager, private config: GitgrokServerConfig) {}

    async onModuleInit() {        
        const home = this.config.homePath.value;
        const exists = existsSync(home);

        if (!exists) {
            await mkdir(home);
        }

        const manifestPath = this.pathMgr.getManifestPath();

        if(!existsSync(manifestPath)) {
            await writeFile(manifestPath, '', 'utf-8');
        }
    }
}