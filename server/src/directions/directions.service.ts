import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleRef } from '@nestjs/core';
import { Direction, DirectionDocument, Directions } from './directions.schema';
import { ParamsDirectionInput } from './inputs/params-direction.input';
import { TokenService } from '../token/token.service';
import { LikeInput } from '../likes/inputs/create-like.input';

@Injectable()
export class DirectionService {
  private tokenService: TokenService;
  constructor(
    private moduleRef: ModuleRef,
    @InjectModel(Direction.name)
    private directionModel: Model<DirectionDocument>,
  ) {}

  async direction(directionID: string): Promise<Direction> {
    const post = this.directionModel
      .findById(directionID)
      .populate('author')
      .exec();

    let { views } = await post;
    views++;

    this.directionModel
      .findByIdAndUpdate(directionID, { views }, { new: true })
      .exec();

    return post;
  }

  async findAll(params: ParamsDirectionInput): Promise<Direction[]> {
    const { page, limit } = params;
    const skip = page === 1 ? 0 : page * limit;
    return this.directionModel
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('author')
      .exec();
  }

  //async setLike(CreatePostDto: LikeInput): Promise<Post> {
  //const { postId, token } = CreatePostDto;

  //const post = this.postModel.findById(postId).exec();
  //const { likes } = await post;

  //this.tokenService = await this.moduleRef.get(TokenService, {
  //strict: false,
  //});
  //const userData = this.tokenService.validateRefreshToken(token);

  //let update =
  //likes.length !== 0 && likes.includes(userData._id)
  //? { $pull: { likes: userData._id } }
  //: { $push: { likes: userData._id } };

  //this.postModel.findByIdAndUpdate(postId, update, { new: true }).exec();

  //return post;
  //}

  async directions(params: ParamsDirectionInput): Promise<Directions> {
    const { page, limit } = params;
    const skip = page === 1 ? 0 : page * limit;

    const allDirections = await this.directionModel.find().exec();
    const directions = await this.directionModel
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('author')
      .exec();
    const total_directions = allDirections.length;
    const total_pages = Math.ceil(total_directions / limit);

    return {
      page,
      total_pages,
      total_directions,
      directions,
    };
  }
}
