import { Restaurant } from './../restaurants/entities/restuarant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderService } from './orders.service';
import { OrderResolver } from './orders.resolver';
import { Order } from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Restaurant])],
  providers: [OrderService, OrderResolver],
})
export class OrdersModule {}
