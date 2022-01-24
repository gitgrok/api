import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from 'src/dtos/create-post.dto';
import { PostRepository } from 'src/modules/db-typeorm/repositories/post.repository';

const prefix = 'post';

// @UseGuards(AuthGuard('jwt'))
@ApiTags(prefix)
@Controller(prefix)
export class PostController {
  constructor(private readonly svc: PostRepository) {}

  @Get()
  async get() {
    return await this.svc.get();
  }

  @Put()
  async put(@Body() body: any) {
    return await this.svc.put([body]);
  }

  @Post()
  async post(@Body() body: CreatePostDto) {
    return await this.svc.post([body]);
  }

  @Delete()
  async delete() {
    const ids = (await this.svc.get()).map((u) => u.id);
    return await this.svc.delete(ids);
  }
}
