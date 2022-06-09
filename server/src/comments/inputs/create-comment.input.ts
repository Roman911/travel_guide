import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class CommentInput {
  @Field(() => ID)
  author: string
  @Field()
  comment: string
  @Field()
  postId: string
}