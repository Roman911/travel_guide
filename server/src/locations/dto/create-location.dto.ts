import { ObjectType, Field, Int } from '@nestjs/graphql';
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
  @Field({ nullable: true })
  address: string;
  @Field()
  createdAt: Date;
  @Field((type) => CreateUserDto, { nullable: true })
  author: CreateUserDto;
}

@ObjectType()
export class CreateLocationsDto {
  @Field(() => Int)
  page: number;
  @Field(() => Int)
  total_pages: number;
  @Field(() => Int)
  total_locations: number;
  @Field((type) => [CreateLocationDto])
  locations: CreateLocationDto[];
}
