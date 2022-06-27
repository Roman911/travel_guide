import { ObjectType, Field, Int } from '@nestjs/graphql'
import { CreateUserDto } from '../../users/dto/create-user.dto'

@ObjectType()
export class CreateLocationDto {
  @Field()
  _id: string
  @Field()
  title: string
  @Field()
  small_text: string
  @Field()
  cover: string
  @Field(type => [String])
  coordinates: string[]
  @Field()
  isType: string
  @Field(type => [String])
  address: string[]
  @Field()
  createdAt: Date
  @Field(type => CreateUserDto, { nullable: true })
  author: CreateUserDto
}