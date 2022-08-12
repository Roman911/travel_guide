import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { CreateUploadDto } from '../../uploadFile/dto/create-uploadFile.dto';

@ObjectType()
export class CreateLocationDto {
  @Field()
  _id: string;
  @Field()
  title: string;
  @Field()
  small_text: string;
  @Field((type) => CreateUploadDto)
  cover: CreateUploadDto;
  @Field((type) => [String])
  coordinates: string[];
  @Field()
  isType: string;
  @Field()
  address: string;
  @Field()
  region: string;
  @Field()
  createdAt: Date;
  @Field((type) => CreateUserDto, { nullable: true })
  author: CreateUserDto;
  @Field(() => Float)
  latitude: number;
  @Field(() => Float)
  longitude: number;
}

@ObjectType()
export class CreateLocationsDto {
  @Field(() => Int)
  total_locations: number;
  @Field((type) => [CreateLocationDto])
  locations: CreateLocationDto[];
}
