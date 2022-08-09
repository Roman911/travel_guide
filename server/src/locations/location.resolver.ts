import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { LocationService } from './locations.service';
import {
  CreateLocationDto,
  CreateLocationsDto,
} from './dto/create-location.dto';
import { Location, LocationDocument } from './locations.schema';
import { ParamsLocationInput, ParamsAllLocationInput } from './inputs';
//import { LikeInput } from '../likes/inputs/create-like.input'
//import { CommentInput } from '../comments/inputs/create-comment.input'
//import { AnswerCommentInput } from '../comments/inputs/addedAnswer.input'

@Resolver()
export class LocationsResolver {
  constructor(
    private locationsService: LocationService,
    @InjectModel(Location.name)
    private locationModel: Model<LocationDocument>,
  ) {}

  @Query(() => [CreateLocationDto])
  async locations(@Args('input') input: ParamsAllLocationInput) {
    return this.locationsService.findAll(input);
  }

  @Query(() => CreateLocationsDto)
  async locationsAndParams(@Args('input') input: ParamsLocationInput) {
    return this.locationsService.locations(input);
  }

  @Query(() => CreateLocationDto)
  async location(@Args('locationID') locationID: string) {
    return this.locationsService.location(locationID);
  }

  //@Mutation(() => CreatePostDto)
  //async setLikeForPost(@Args('input') input: LikeInput) {
  //return this.postsService.setLike(input)
  //}

  //@Mutation(() => CreatePostDto)
  //async addCommentForPost(@Args('input') input: CommentInput) {
  // return this.postsService.addComment(input)
  //}

  //@Mutation(() => CreatePostDto)
  //async addAnswerForComment(@Args('input') input: AnswerCommentInput) {
  // return this.postsService.addAnswer(input)
  //}
}
