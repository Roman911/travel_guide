import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Comment, CommentDocument } from './comments.schema'
import { CommentInput } from './inputs/create-comment.input'

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private commentModel: Model<CommentDocument>
  ) { }

  async saveComment(createCommentDto: CommentInput): Promise<Comment> {
    const { author, comment, postId } = await createCommentDto

    return await this.commentModel.create({ author, comment, postId })
  }

  async findAll(postId: string): Promise<Comment[]> {
    return this.commentModel.find({ postId }).sort({ views: -1 }).populate('author').populate('answer.author').exec()
  }
}