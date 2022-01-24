import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { BaseRepository } from './base.repository';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  protected getEntityType() {
    return Post;
  }
  constructor(@InjectConnection() protected readonly connection: Connection) {
    super();
  }
}
