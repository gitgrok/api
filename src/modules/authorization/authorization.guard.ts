import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { checkJwt } from './check-jwt.function';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const req = context.getArgByIndex(0);
      const res = context.getArgByIndex(1);
      checkJwt(req, res);

      return true;
    } catch (e) {
      throw new UnauthorizedException(e, AuthorizationGuard.name);
    }
  }
}
