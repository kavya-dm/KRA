
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { User } from '../user/user.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  // CREATE
  async create(userId: string, dto: CreatePostDto) {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const post = this.postRepo.create({
      title: dto.title,
      content: dto.content,
      user,
    });

    return this.postRepo.save(post);
  }

  // READ ALL
  findAll() {
    return this.postRepo.find({
      relations: ['user', 'comments'],
    });
  }

  // READ ONE
  async findOne(id: string) {
    const post = await this.postRepo.findOne({
      where: { id },
      relations: ['user', 'comments'],
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }

  // DELETE
  async remove(id: string) {
    const post = await this.findOne(id);
    return this.postRepo.remove(post);
  }
}


