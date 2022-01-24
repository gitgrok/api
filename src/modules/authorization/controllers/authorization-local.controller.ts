import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthRequestDto } from '../dtos/auth-request.dto';
import { AuthResponseDto } from '../dtos/auth-response.dto';
import { AuthorizationLocalService } from '../services/authorization-local.service';

const prefix = 'auth';

@ApiTags(prefix)
@Controller(prefix)
export class AuthorizationLocalController {
  constructor(private readonly authService: AuthorizationLocalService) { }

  @Post(AuthorizationLocalController.prototype.signup.name)
  async signup(@Body() body: AuthRequestDto, @Res({ passthrough: true }) res: Response) {
    return this.cookie(res, await this.authService.signup(body));
  }

  @Post(AuthorizationLocalController.prototype.signin.name)
  async signin(@Body() body: AuthRequestDto, @Res({ passthrough: true }) res: Response) {
    return this.cookie(res, await this.authService.signin(body));
  }

  ///////////////////////////////////////////////////////////////////////////////////// todo below this line

  @Post(AuthorizationLocalController.prototype.signout.name)
  async signout(@Req() req: Request) {
    req.user
    return await this.authService.signout('');
  }

  @Post(AuthorizationLocalController.prototype.refreshTokens.name)
  async refreshTokens() {
    return await this.authService.refresh({} as any);
  }

  private cookie(_res: Response, authResult: AuthResponseDto) {
    return authResult;
  }

  private cookieCookie(res: Response, authResult: AuthResponseDto) {
    const { accessToken, refreshToken, userId } = authResult;
    res.cookie('accessToken', accessToken);
    res.cookie('refreshToken', refreshToken);
    res.cookie('userId', userId);
  }
}
