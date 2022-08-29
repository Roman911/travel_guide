import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/users.schema';

export type DirectionDocument = Direction & mongoose.Document;

@Schema()
class Legs {
  @Prop(
    raw({
      distance: { text: { type: String }, value: { type: Number } },
      duration: { text: { type: String }, value: { type: Number } },
    }),
  )
  duration: string;
}

const LegsSchema = SchemaFactory.createForClass(Legs);

@Schema()
export class Direction {
  @Prop()
  type_material: string;
  @Prop()
  travelMode: string[];
  @Prop()
  cover: string;
  @Prop()
  title: string;
  @Prop()
  link: string;
  @Prop(
    raw([
      {
        distance: { text: { type: String }, value: { type: Number } },
        duration: { text: { type: String }, value: { type: Number } },
      },
    ]),
  )
  legs: Record<any, any>;
  @Prop()
  tags: string[];
  @Prop()
  views: number;
  @Prop()
  likes: string[];
  @Prop()
  small_text: string;
  @Prop()
  distance: number;
  @Prop({ default: new Date() })
  last_seen: Date;
  @Prop({ default: new Date() })
  createdAt: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User;
}

export const DirectionSchema = SchemaFactory.createForClass(Direction);

@Schema()
export class Directions {
  @Prop()
  page: number;
  @Prop()
  total_pages: number;
  @Prop()
  total_directions: number;
  @Prop({ type: [DirectionSchema] })
  directions: Direction[];
}

export const DirectionsSchema = SchemaFactory.createForClass(Directions);
