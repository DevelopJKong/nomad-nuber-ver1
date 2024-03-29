import { CoreOutput } from 'src/common/dtos/output.dto';
import { InputType, PickType, ObjectType } from '@nestjs/graphql';
import { Order } from '../entities/order.entity';

@InputType()
export class EditOrderInput extends PickType(Order, ['id', 'status']) {}


@ObjectType()
export class EditOrderOutput extends CoreOutput {}
