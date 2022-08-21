import { CoreOutput } from './../../common/dtos/output.dto';
import { Order } from './../entities/order.entity';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class GetOrderInput extends PickType(Order, ['id']) {}

@ObjectType()
export class GetOrderOutput extends CoreOutput {
  @Field((type) => Order, { nullable: true })
  order?: Order;
}
