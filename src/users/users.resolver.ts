import { User } from './entities/user.entity';
import { UsersService } from './user.service';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => Boolean)
  hi() {
      return true;
  }
}
