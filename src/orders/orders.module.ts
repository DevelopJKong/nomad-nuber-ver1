import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { Order } from './entities/order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Order])],
  providers: [OrdersService, OrdersResolver]
})
export class OrdersModule {}
