import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SearchService } from '../services/search.service';

const prefix = 'search';

@ApiTags(prefix)
@Controller(prefix)
export class SearchController {
  logger = new Logger(SearchController.name);

  constructor(private readonly searchService: SearchService) {}

  @Get('v2/:term')
  async v2(
    @Param() params: { term: string },
    @Query('pathFilter') pathFilter: string,
  ) {
    return this.searchService.searchV2(params.term, pathFilter);
  }

  @Post()
  async search(
    @Body() { term, path }: { term: string; path: string; url: string },
  ) {
    return this.searchService.searchV2(term, path);
  }
}
