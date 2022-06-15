import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ModuleRef } from "@nestjs/core"
import { Post, PostDocument } from './posts.schema'
import { ParamsPostInput } from './inputs/params-post.input'
import { TokenService } from '../token/token.service'
//import { CommentInput } from '../comments/inputs/create-comment.input'
//import { AnswerCommentInput } from '../comments/inputs/addedAnswer.input'

@Injectable()
export class PostService {
  private tokenService: TokenService
  constructor(
    private moduleRef: ModuleRef,
    @InjectModel(Post.name)
    private postModel: Model<PostDocument>
  ) { }

  async post(postID: string): Promise<Post> {
    return this.postModel.findById(postID).populate('author').exec()
  }

  async findAll(params: ParamsPostInput): Promise<Post[]> {
    const { page, limit } = params
    const skip = page === 1 ? 0 : page * limit
    return this.postModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit).populate('author').exec()
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