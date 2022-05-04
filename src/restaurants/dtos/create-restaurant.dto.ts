import { CoreOutput } from './../../common/dtos/output.dto';
import { Restaurant } from './../entities/restuarant.entity';
import { InputType, OmitType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput extends OmitType(Restaurant, ['id','category']) {
  // 그러게? 왜 name 옆 속성은 소문자고 리턴 타입은 대문자지?
}

@ObjectType()
export class CreateRestaurantOutput extends CoreOutput {}