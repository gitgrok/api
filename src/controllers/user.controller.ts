import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRepository } from 'src/modules/db-typeorm/repositories/user.repository';

const prefix = 'user';

// @UseGuards(AuthGuard('jwt'))
@ApiTags(prefix)
@Controller(prefix)
export class UserController {
  constructor(private readonly svc: UserRepository) {}

  @Get()
  async get() {
    return await this.svc.get();
  }

  @Delete()
  async delete() {
    const ids = (await this.svc.get()).map((u) => u.id);
    return await this.svc.delete(ids);
  }
}
