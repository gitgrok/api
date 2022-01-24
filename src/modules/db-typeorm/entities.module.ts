import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';
import { PostRepository } from './repositories/post.repository';

const providers = [UserRepository, PostRepository];

@Module({})
export class EntitiesModule {
  static forFun() {
    return {
      imports: [TypeOrmModule.forFeature([Post, User])],
      providers: [...providers],
      module: EntitiesModule,
      exports: [TypeOrmModule, ...providers],
    };
  }
}
