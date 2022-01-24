import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IAuthConfig } from 'src/configs/auth.config';
import { EntitiesModule } from '../db-typeorm/entities.module';
import { AuthorizationLocalController } from './controllers/authorization-local.controller';
import { AuthorizationLocalService } from './services/authorization-local.service';
import { JwtStrategy } from './strategies/jwt.strategy';

const providers = [AuthorizationLocalService, JwtStrategy];
const controllers = [AuthorizationLocalController];

@Module({})
export class AuthorizationModule {
  static forRoot(authConfig: IAuthConfig): DynamicModule {
    const { accessSecret } = authConfig;

    return {
      module: AuthorizationModule,
      controllers,
      providers: [
        ...providers,
        { provide: 'authConfig', useValue: authConfig },
      ],
      imports: [
        EntitiesModule.forFun(),
        TypeOrmModule,
        JwtModule.register({ secret: accessSecret }),
      ],
    };
  }
}
