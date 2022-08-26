import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreateUserDto } from '../../users/dto/create-user.dto';

@ObjectType()
class Legs {
  @Field()
  distance: {
    text: String;
    value: Number;
  };
  @Field()
  duration: {
    text: String;
    value: Number;
  };
}

@ObjectType()
export class CreateDirectionDto {
  @Field()
  _id: string;
  @Field()
  cover: string;
  @Field()
  title: string;
  @Field((type) => [String])
  travelMode: string[];
  @Field()
  link: string;
  @Field((type) => [Legs])
  legs: Legs[];
  @Field((type) => [String])
  tags: string[];
  @Field()
  isType: string;
  @Field(() => Int)
  views: number;
  @Field((type) => [String])
  likes: string[];
  @Field()
  small_text: string;
  @Field({ nullable: true })
  last_seen: Date;
  @Field()
  createdAt: Date;
  @Field((type) => CreateUserDto, { nullable: true })
  author: CreateUserDto;
}

@ObjectType()
export class CreateDirectionsDto {
  @Field(() => Int)
  page: number;
  @Field(() => Int)
  total_pages: number;
  @Field(() => Int)
  total_directions: number;
  @Field((type) => [CreateDirectionDto])
  directions: CreateDirectionDto[];
}
