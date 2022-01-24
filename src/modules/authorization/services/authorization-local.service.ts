import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../db-typeorm/repositories/user.repository';
import { AuthRequestDto } from '../dtos/auth-request.dto';
import * as bcrypt from 'bcrypt';
import { authConfig } from 'src/configs/auth.config';
import { AuthResponseDto } from '../dtos/auth-response.dto';

@Injectable({})
export class AuthorizationLocalService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly jwtSvc: JwtService,
  ) { }

  async signup({ username: email, password, data }: AuthRequestDto): Promise<AuthResponseDto> {
    const [user] = await this.userRepo.post([{ email, password: await this.hash(password), data }]);
    return await this.getTokens(user.id, email);    
  }  
  
  async signin({ username: email, password }: AuthRequestDto): Promise<AuthResponseDto> {
    const [user] = await this.userRepo.get({ email });
    if (!user)
      throw new UnauthorizedException('no user found with email: ' + email);
    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException('no user found with email: ' + email);
    
    return await this.getTokens(user.id, email);        
  }

  async signout(id: string) {
    await this.userRepo.put([{id, hash: ''}]);
  }
  
  async refresh({ username: email, password, data }: AuthRequestDto) {
    const user = await this.userRepo.post([{ email, password, data }]);
    return user;
  }
  
  private async updateRefreshTokenHash(id: string, refreshToken: string) {
    const hash = await this.hash(refreshToken);
    await this.userRepo.put([{ id, hash }])
  }  
  
  private async getTokens(userId: string, email: string) {
    const base = {
      userId,
      email
    };
    const [accessToken, refreshToken] = await Promise.all([
      { ...base, expiresIn: 60 * 15, secret: authConfig.accessSecret },
      { ...base, expiresIn: 60 * 60 * 24 * 7, secret: authConfig.refreshSecret }
    ].map(c => this.jwtSvc.signAsync(c)));
    
    return { accessToken, refreshToken, userId };
  }
  
  private async onAuthSuccess (userId: string, email: string) {
    const tokens = await this.getTokens(userId, email);
    await this.updateRefreshTokenHash(userId, tokens.refreshToken);
    return tokens;
  }

  private async hash(data: any) {    
    return await bcrypt.hash(data, 10);
  }
}
