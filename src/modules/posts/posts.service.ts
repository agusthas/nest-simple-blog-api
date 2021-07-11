import { Inject, Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { PostDto } from './dto/post.dto';
import { User } from '../users/entities/user.entity';
import { POST_REPOSITORY } from '../../core/constants';
import { UpdatePostDto } from './dto/update-post.dto';

type UserId = Pick<User, 'id'>;

@Injectable()
export class PostsService {
  constructor(
    @Inject(POST_REPOSITORY) private readonly postRepository: typeof Post,
  ) {}

  async create(post: PostDto, userId: UserId) {
    return await this.postRepository.create({ ...post, userId });
  }

  async findAll() {
    const Query = {
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
      ],
    };

    return await this.postRepository.findAll(Query);
  }

  async findOne(id: number) {
    const Query = {
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
      ],
    };

    return await this.postRepository.findOne({
      where: { id },
      ...Query,
    });
  }

  async update(id: number, data: UpdatePostDto, userId: UserId) {
    const [numberOfAffectedRows] = await this.postRepository.update(
      { ...data },
      { where: { id, userId } },
    );

    return { numberOfAffectedRows, data };
  }

  async remove(id: number, userId: UserId) {
    return await this.postRepository.destroy({ where: { id, userId } });
  }
}
