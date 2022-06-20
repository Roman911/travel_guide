import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { User } from '../users/users.schema'
//import { Comment, CommentSchema } from '../comments/comments.schema'

export type PostDocument = Post & mongoose.Document

@Schema()
export class Post {
  @Prop()
  editor: string
  @Prop()
  type_material: string
  @Prop()
  cover: string
  @Prop()
  title: string
  @Prop()
  tickets: string[]
  @Prop()
  link: string
  @Prop()
  tags: string[]
  @Prop()
  work_time: string
  @Prop()
  isType: string
  @Prop()
  how_to_get_there: string
  @Prop()
  views: number
  @Prop()
  likes: string[]
  @Prop()
  isPrice: boolean
  @Prop()
  confirmed: boolean
  @Prop()
  confirm_hash: string
  //@Prop({ type: [CommentSchema], default: [] })
  //comments: Comment[]
  @Prop()
  small_text: string
  @Prop({ default: new Date })
  last_seen: Date
  @Prop({ default: new Date })
  createdAt: Date
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User
}

export const PostSchema = SchemaFactory.createForClass(Post)

@Schema()
export class Posts {
  @Prop()
  page: number
  @Prop()
  total_pages: number
  @Prop()
  total_posts: number
  @Prop({ type: [PostSchema] })
  posts: Post[]
}

export const PostsSchema = SchemaFactory.createForClass(Posts)