import { Restaurant } from './../entities/restuarant.entity';
import { InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant,['id']){ // 그러게? 왜 name 옆 속성은 소문자고 리턴 타입은 대문자지?

}
