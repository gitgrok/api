import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from './modules/db-typeorm/entities.module';

@Module({})
export class AppModule {
  static forRoot(dbConfig: any) {
    return {
      imports: [       
        EntitiesModule.forFun(),
        TypeOrmModule.forRoot(dbConfig),
      ],
      controllers: [],
      module: AppModule,
    };
  }
}
