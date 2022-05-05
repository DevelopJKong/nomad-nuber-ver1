import { CoreOutput } from './../../common/dtos/output.dto';
import { Restaurant } from './../entities/restuarant.entity';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput extends PickType(Restaurant, [
  'name',
  'coverImg',
  'address',
]) {
  @Field(type => String)
  categoryName:string;

}

@ObjectType()
export class CreateRestaurantOutput extends CoreOutput {}
