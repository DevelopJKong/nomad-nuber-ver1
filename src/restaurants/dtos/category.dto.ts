import { Restaurant } from './../entities/restuarant.entity';
import { PaginationInput, PaginationOutput } from './../../common/dtos/pagination.dto';
import { Category } from './../entities/category.entity';
import { ObjectType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryInput extends PaginationInput {
    @Field(type=> String)
    slug:string;
}

@ObjectType()
export class CategoryOutput extends PaginationOutput {
    @Field(type => [Restaurant], { nullable: true })
    restaurants?: Restaurant[];
    @Field(type=> Category, { nullable:true})
    category?:Category;
}