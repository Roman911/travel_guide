import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ParamsAllLocationInput {
  @Field((type) => [String])
  types: string[];
}
