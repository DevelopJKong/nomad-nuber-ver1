import { User } from './../users/entities/user.entity';
import { AuthUser } from './../auth/auth-user.decorator';
import { CreateAccountOutput } from './../users/dtos/create-account.dto';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { CreateRestaurantInput } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restuarant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Mutation((returns) => CreateAccountOutput) //왜 여기서 import가 안되었을까?
  async createRestaurant(
    @AuthUser() authUser:User,
    @Args('input') createRestaurantInput: CreateRestaurantInput,
  ): Promise<CreateAccountOutput> {
    return this.restaurantService.createRestaurant(authUser,createRestaurantInput);
  }


}
