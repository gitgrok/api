import jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { promisify } from 'util';

export const checkJwt = promisify(
  jwt({
    secret: expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: '',
    }),
    audience: '',
    issuer: '',
    algorithms: ['RS256'],
  }),
);
