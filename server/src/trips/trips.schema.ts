import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/users.schema';

export type TripDocument = Trip & mongoose.Document;

@Schema()
export class Trip {
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
  @Prop(
    raw({
      distance: { type: Number },
      travel_time: { type: Number },
      waypoints: { type: Number },
    }),
  )
  trip_value: Record<any, any>;
  @Prop(
    raw([
      {
        location: { lat: { type: Number }, lng: { type: Number } },
        address: { type: String },
        infoLocation: { type: Boolean },
        locationId: { type: String },
        cover: { type: String },
      },
    ]),
  )
  waypoints: Record<any, any>;
  @Prop({ default: new Date() })
  last_seen: Date;
  @Prop({ default: new Date() })
  createdAt: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User;
}

export const TripSchema = SchemaFactory.createForClass(Trip);

@Schema()
export class Trips {
  @Prop()
  page: number;
  @Prop()
  total_pages: number;
  @Prop()
  total_trips: number;
  @Prop({ type: [TripSchema] })
  trips: Trip[];
}

export const TripsSchema = SchemaFactory.createForClass(Trips);
