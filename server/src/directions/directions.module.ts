import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DirectionsResolver } from './direction.resolver';
import { Direction, DirectionSchema } from './directions.schema';
import { DirectionService } from './directions.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Direction.name, schema: DirectionSchema },
    ]),
  ],
  providers: [DirectionsResolver, DirectionService],
})
export class DirectionsModule {}
