import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleRef } from '@nestjs/core';
import { Location, LocationDocument, Locations } from './locations.schema';
import { ParamsLocationInput, ParamsAllLocationInput } from './inputs';
import { TokenService } from '../token/token.service';
//import { LikeInput } from '../likes/inputs/create-like.input'

@Injectable()
export class LocationService {
  private tokenService: TokenService;
  constructor(
    private moduleRef: ModuleRef,
    @InjectModel(Location.name)
    private locationModel: Model<LocationDocument>,
  ) {}

  async location(locationID: string): Promise<Location> {
    return this.locationModel
      .findById(locationID)
      .populate('author')
      .populate('cover')
      .exec();
  }

  async findAll(params: ParamsAllLocationInput): Promise<Location[]> {
    const sort = params.types.length === 0 ? {} : { isType: params.types };

    return this.locationModel
      .find(sort)
      .sort({ createdAt: -1 })
      .populate('author')
      .exec();
  }

  async locations(params: ParamsLocationInput): Promise<Locations> {
    const { page, limit, types } = params;
    const skip = page === 1 ? 0 : page * limit;
    const sort = types.length === 0 ? {} : { isType: types };

    const allLocations = await this.locationModel.find(sort);

    const locations = await this.locationModel
      .find(sort)
      .sort({ createdAt: -1 })
      .populate('author')
      .populate('cover')
      .skip(skip)
      .limit(limit)
      .exec();

    const total_locations = allLocations.length;
    const total_pages = Math.ceil(total_locations / limit);

    return {
      page,
      total_pages,
      total_locations,
      locations,
    };
  }

  //async addComment(CreatePostDto: CommentInput): Promise<Post> {
  //const { id, token, comment } = CreatePostDto

  //this.tokenService = await this.moduleRef.get(TokenService, { strict: false })
  //const userData = this.tokenService.validateRefreshToken(token)

  //const update = {
  //comments: {
  //author: userData.id,
  //comment
  //}
  //}

  //return this.postModel.findByIdAndUpdate(id, { $push: update }, { new: true }).exec()
  //}

  //async addAnswer(CreatePostDto: AnswerCommentInput): Promise<Post> {
  //const { id, commentId, token, comment } = CreatePostDto

  // this.tokenService = await this.moduleRef.get(TokenService, { strict: false })
  // const userData = this.tokenService.validateRefreshToken(token)

  // const update = {
  // answers: {
  // author: userData.id,
  // comment
  // }
  // }

  // return this.postModel.findById(id).findOneAndUpdate({ comments: commentId }, { $push: update }, { new: true }).exec()
  //}
}
