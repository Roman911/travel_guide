import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleRef } from '@nestjs/core';
import { Location, LocationDocument, Locations } from './locations.schema';
import { ParamsLocationInput } from './inputs';
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

  async allLocations(params: ParamsLocationInput): Promise<Locations> {
    const typeBySorted =
      params.types.length === 0 ? {} : { isType: params.types };
    const regionBySorted =
      params.region.length === 0 ? {} : { region: params.region };
    const debouncedBySorted =
      params.debounced.length === 0
        ? {}
        : {
            latitude: {
              $gte: params.debounced[0][1],
              $lte: params.debounced[1][1],
            },
            longitude: {
              $gte: params.debounced[0][0],
              $lte: params.debounced[1][0],
            },
          };

    const locations = await this.locationModel
      .find({
        ...typeBySorted,
        ...regionBySorted,
        ...debouncedBySorted,
      })
      .sort({ createdAt: -1 })
      .populate('author')
      .populate('cover')
      .exec();

    const total_locations = locations.length;

    return {
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
