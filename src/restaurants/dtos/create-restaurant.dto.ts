import { Restaurant } from './../entities/restuarant.entity';
import {  Field, InputType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@InputType()
export class createRestaurantDto extends OmitType(Restaurant,['id']){ // 그러게? 왜 name 옆 속성은 소문자고 리턴 타입은 대문자지?

}
