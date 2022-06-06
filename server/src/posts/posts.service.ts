import { Model, ObjectId } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Post, PostDocument } from './posts.schema'
import { ParamsPostInput } from './inputs/params-post.input'

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private postModel: Model<PostDocument>
  ) { }

  async post(postID: string): Promise<Post> {
    return this.postModel.findById(postID).populate('author').exec()
  }

  async postsTopPage(): Promise<Post[]> {
    return this.postModel.find().sort({ views: -1 }).limit(4).exec()
  }

  async findAll(params: ParamsPostInput): Promise<Post[]> {
    const { page, limit } = params
    const skip = page === 1 ? 0 : page * limit
    return this.postModel.find().sort({ views: -1 }).skip(skip).limit(limit).populate('author').exec()
  }
}