import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QueryService } from '../services/query.service';

const prefix = 'query';

@ApiTags(prefix)
@Controller(prefix)
export class QueryController {
  logger = new Logger(QueryController.name);

  constructor(private readonly queryService: QueryService) {}

  @Get()
  async list() {
    return await this.queryService.list();
  }
}
