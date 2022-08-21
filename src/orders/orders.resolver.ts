import { GetOrderOutput, GetOrderInput } from './dto/get-order.dto';
import { CreateAccountOutput } from './../users/dtos/create-account.dto';
import { User } from './../users/entities/user.entity';
import { CreateOrderInput, CreateOrderOutput } from './dto/create-order.dto';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Order } from './entities/order.entity';
import { OrderService } from './orders.service';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { Role } from 'src/auth/role.decorator';
import { GetOrdersOutput, GetOrdersInput } from './dto/get-orders.dto';

@Resolver((of) => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation((returns) => CreateOrderOutput)
  @Role(['Client'])
  createOrder(
    @AuthUser() customer: User,
    @Args('input') createOrderInput: CreateOrderInput,
  ): Promise<CreateOrderOutput> {
    return this.orderService.createOrder(customer, createOrderInput);
  }

  @Query((returns) => GetOrdersOutput)
  @Role(['Any'])
  async getOrders(
    @AuthUser() user: User,
    @Args('input') getOrdersInput: GetOrdersInput,
  ):Promise<GetOrdersOutput> {
    return this.orderService.getOrders(user,getOrdersInput);
  }

  @Query((returns) => GetOrderOutput)
  @Role(['Any'])
  async getOrder(
    @AuthUser() user: User,
    @Args('input') getOrderInput: GetOrderInput,
  ):Promise<GetOrdersOutput> {
    return this.orderService.getOrder(user,getOrderInput);
  }
}
