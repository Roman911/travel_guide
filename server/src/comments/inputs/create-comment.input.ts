import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CommentInput {
  @Field()
  id: string
  @Field()
  comment: string
  @Field()
  token: string
}