import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Args, Resolver, Query } from '@nestjs/graphql'
import { PostService } from './posts.service'
import { CreatePostDto } from './dto/create-post.dto'
import { Post, PostDocument } from "./posts.schema"
import { ParamsPostInput } from './inputs/params-post.input'

@Resolver()
export class PostsResolver {
  constructor(
    private postsService: PostService,
    @InjectModel(Post.name)
    private postModel: Model<PostDocument>
  ) { }

  @Query(() => [CreatePostDto])
  async posts(@Args('input') input: ParamsPostInput) {
    return this.postsService.findAll(input)
  }

  @Query(() => [CreatePostDto])
  async postsTop() {
    return this.postsService.postsTopPage()
  }

  @Query(() => CreatePostDto)
  async post(@Args('postID') postID: string) {
    return this.postsService.post(postID)
  }
}