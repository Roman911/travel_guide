import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ParamsDirectionInput {
  @Field((type) => Int)
  limit: number;
  @Field((type) => Int)
  page: number;
}
