import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql'
import { CommentsService } from './comments.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { Comment, CommentDocument } from "./comments.schema"
import { CommentInput } from './inputs/create-comment.input'
import { AnswerCommentInput } from './inputs/addedAnswer.input'

@Resolver()
export class CommentsResolver {
  constructor(
    private commentsService: CommentsService,
    @InjectModel(Comment.name)
    private commentsModel: Model<CommentDocument>
  ) { }

  @Query(() => [CreateCommentDto])
  async comments(@Args('id') id: string) {
    return this.commentsService.findAll(id)
  }

  @Mutation(() => CreateCommentDto)
  async createComment(@Args('input') input: CommentInput) {
    return this.commentsService.saveComment(input)
  }

  @Mutation(() => CreateCommentDto)
  async addedCommentAnswer(@Args('input') input: AnswerCommentInput) {
    return this.commentsService.addedAnswer(input)
  }
}