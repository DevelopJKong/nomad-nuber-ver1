import { Module } from '@nestjs/common';
import { Restaurant } from './entities/restuarant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './repositories/category.repository';
import {
  CategoryResolver,
  DishResolver,
  RestaurantResolver,
} from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';
import { Dish } from './entities/dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, Dish,CategoryRepository])],
  providers: [
    DishResolver,
    RestaurantResolver,
    CategoryResolver,
    RestaurantService,
  ],
})
export class RestaurantsModule {}
