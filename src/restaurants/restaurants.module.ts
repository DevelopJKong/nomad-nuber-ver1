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

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, CategoryRepository])],
  providers: [
    DishResolver,
    RestaurantResolver,
    CategoryResolver,
    RestaurantService,
  ],
})
export class RestaurantsModule {}
