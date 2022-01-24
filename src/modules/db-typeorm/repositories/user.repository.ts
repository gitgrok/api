import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { BaseRepository } from './base.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  protected getEntityType() {
    return User;
  }
  constructor(@InjectConnection() protected readonly connection: Connection) {
    super();
  }
}
