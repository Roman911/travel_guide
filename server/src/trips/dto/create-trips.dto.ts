import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreateUserDto } from '../../users/dto/create-user.dto';

@ObjectType()
class TripValue {
  @Field()
  distance: Number;
  @Field()
  travel_time: Number;
  @Field()
  waypoints: Number;
}

@ObjectType()
class Obj {
  @Field()
  text: String;
  @Field()
  value: Number;
}

@ObjectType()
class Legs {
  @Field()
  distance: Obj;
  @Field()
  duration: Obj;
}

@ObjectType()
export class CreateTripDto {
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
  @Field((type) => TripValue)
  trip_value: TripValue;
  @Field({ nullable: true })
  last_seen: Date;
  @Field()
  createdAt: Date;
  @Field((type) => CreateUserDto, { nullable: true })
  author: CreateUserDto;
}

@ObjectType()
export class CreateTripsDto {
  @Field(() => Int)
  page: number;
  @Field(() => Int)
  total_pages: number;
  @Field(() => Int)
  total_trips: number;
  @Field((type) => [CreateTripDto])
  trips: CreateTripDto[];
}
