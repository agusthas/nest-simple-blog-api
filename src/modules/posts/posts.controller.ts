import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
  Req,
} from '@nestjs/common';

import { JwtAuthGuard } from '../../core/guards/jwtAuth.guard';

import { PostDto } from './dto/post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';
import { Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll() {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const post = await this.postsService.findOne(id);

    if (!post) {
      throw new NotFoundException("This post doesn't exists");
    }

    return post;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPostDto: PostDto, @Req() req) {
    return this.postsService.create(createPostDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() post: UpdatePostDto,
    @Req() req,
  ) {
    const { numberOfAffectedRows, data } = await this.postsService.update(
      id,
      post,
      req.user.id,
    );

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This post doesnt't exists");
    }

    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number, @Req() req) {
    const deleted = await this.postsService.remove(id, req.user.id);

    if (deleted === 0) {
      throw new NotFoundException("This post doesnt't exists");
    }

    return 'Successfully deleted';
  }
}
