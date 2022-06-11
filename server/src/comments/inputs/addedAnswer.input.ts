import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class AnswerCommentInput {
  @Field()
  comment: string
  @Field()
  commentId: string
  @Field()
  token: string
}