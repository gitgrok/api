import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IAuthConfig } from 'src/configs/auth.config';
import { Request } from 'express';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(@Inject('authConfig') readonly authConfig: IAuthConfig) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: authConfig.ignoreExpiration,
            secretOrKey: authConfig.refreshSecret,
            passReqToCallback: true
        });
    }

    async validate(req: Request, payload: any) {
        const refreshToken = req.get('authorization').replace('Bearer', '').trim();
        return {...payload, refreshToken };
    }
}
