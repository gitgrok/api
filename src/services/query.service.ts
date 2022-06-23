import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class QueryService {
  list() {
    return Promise.resolve(['one', 'two', 'three']);
  }

  logger = new Logger(QueryService.name); 
}
