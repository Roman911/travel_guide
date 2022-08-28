import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { DirectionService } from './directions.service';
import {
  CreateDirectionDto,
  CreateDirectionsDto,
} from './dto/create-direction.dto';
import { Direction, DirectionDocument } from './directions.schema';
import { ParamsDirectionInput } from './inputs/params-direction.input';
//import { LikeInput } from '../likes/inputs/create-like.input';

@Resolver()
export class DirectionsResolver {
  constructor(
    private directionsService: DirectionService,
    @InjectModel(Direction.name)
    private directionModel: Model<DirectionDocument>,
  ) {}

  @Query(() => CreateDirectionsDto)
  async directionsAndParams(@Args('input') input: ParamsDirectionInput) {
    return this.directionsService.directions(input);
  }

  @Query(() => [CreateDirectionDto])
  async directions(@Args('input') input: ParamsDirectionInput) {
    return this.directionsService.findAll(input);
  }

  @Query(() => CreateDirectionDto)
  async direction(@Args('directionID') directionID: string) {
    return this.directionsService.direction(directionID);
  }

  @Mutation(() => CreateDirectionDto)
  async setLikeForPost(
    @Args('input') input: string,
    {
      /*LikeInput*/
    },
  ) {
    //return this.directionsService.setLike(input);
  }

  //@Mutation(() => CreatePostDto)
  //async addCommentForPost(@Args('input') input: CommentInput) {
  // return this.postsService.addComment(input)
  //}

  //@Mutation(() => CreatePostDto)
  //async addAnswerForComment(@Args('input') input: AnswerCommentInput) {
  // return this.postsService.addAnswer(input)
  //}
}
