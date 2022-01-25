import { Body, Controller, Get, Put, Logger, Param } from '@nestjs/common';
import { CreateRepoDto } from 'src/dtos/create-repo.dto';
import { RepoService } from 'src/services/repo.service';


@Controller('repos')
export class RepoController {
  logger = new Logger(RepoController.name);

  constructor(private readonly repositoryService: RepoService) {}

  @Get()
  async list() {
    return this.repositoryService.list();
  }

  @Get(':url/branches')
  async branches(@Param() url: string) {
    return await this.repositoryService.get(url);
  }

  @Get(':url/open-repo')
  async openRepo(@Param() url: string) {
    return await this.repositoryService.openRepo(url);
  }

  @Put('open-dir')
  async openDir(@Body() dto: CreateRepoDto) {
    return await this.repositoryService.openDir(dto.url);
  }

  @Put()
  async track(@Body() body: CreateRepoDto) {
    console.warn('body', body)
    return await Promise.resolve(this.repositoryService
      .track(body.url))
      
      // .then(() => {
        // this.logger.log('success');
      // })
      // .catch((e) => {
        // this.logger.warn(e);
      // });
  }
}
