import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Comment } from './comment.entity';
import { User } from '../user/user.entity';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment, User])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
