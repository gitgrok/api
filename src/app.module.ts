import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from './modules/db-typeorm/entities.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { authConfig } from './configs/auth.config';
import { PostController } from './controllers/post.controller';
import { UserController } from './controllers/user.controller';

@Module({})
export class AppModule {
  static forRoot(dbConfig: any) {
    return {
      imports: [
        AuthorizationModule.forRoot(authConfig),
        EntitiesModule.forFun(),
        TypeOrmModule.forRoot(dbConfig),
      ],
      controllers: [PostController, UserController],
      module: AppModule,
    };
  }
}
