import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ModuleRef } from "@nestjs/core"
import { Location, LocationDocument } from './locations.schema'
//import { ParamsPostInput } from './inputs/params-post.input'
import { TokenService } from '../token/token.service'
//import { LikeInput } from '../likes/inputs/create-like.input'

@Injectable()
export class LocationService {
  private tokenService: TokenService
  constructor(
    private moduleRef: ModuleRef,
    @InjectModel(Location.name)
    private locationModel: Model<LocationDocument>
  ) { }

  async location(locationID: string): Promise<Location> {
    return this.locationModel.findById(locationID).populate('author').populate('cover').exec()
  }

  async findAll(): Promise<Location[]> {
    return this.locationModel.find().sort({ createdAt: -1 }).populate('author').exec()
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