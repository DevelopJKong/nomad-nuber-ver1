import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class createRestaurantDto { // 그러게? 왜 name 옆 속성은 소문자고 리턴 타입은 대문자지?
  @Field((type) => String)
  @IsString()
  @Length(5,10)
  name: string;

  @Field((type) => Boolean) 
  @IsBoolean()
  isVegan: boolean;

  @Field((type) => String)
  @IsString()
  address: string;

  @Field((type) => String)
  @IsString()
  @Length(5,10)
  ownerName: string;
}
