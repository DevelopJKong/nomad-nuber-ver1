import { CoreOutput } from './../../common/dtos/output.dto';
import { InputType, Field, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class DeleteDishInput {
  @Field((type) => Int)
  dishId: number;
}

@ObjectType()
export class DeleteDishOutput extends CoreOutput {}
