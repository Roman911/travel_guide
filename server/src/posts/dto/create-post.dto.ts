import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class CreatePostDto {
  @Field()
  _id: string
  @Field()
  editor: string
  @Field()
  type_material: string
  @Field()
  cover: string
  @Field()
  title: string
  @Field(type => [String])
  tickets: string[]
  @Field()
  link: string
  @Field(type => [String])
  tags: string[]
  @Field()
  work_time: string
  @Field()
  isType: string
  @Field()
  how_to_get_there: string
  @Field(() => Int)
  views: number
  @Field(type => [String])
  likes: string[]
  @Field()
  isPrice: boolean
  @Field()
  confirmed: boolean
  @Field()
  confirm_hash: string
  @Field(() => Int)
  comments: number
  @Field()
  small_text: string
  @Field({ nullable: true })
  last_seen: Date
}