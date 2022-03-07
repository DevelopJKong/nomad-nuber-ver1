import { CoreOutput } from './../../common/dtos/output.dto';
import { PickType, ObjectType, Field, InputType } from '@nestjs/graphql';
import { User } from './../entities/user.entity';

@InputType()
export class CreateAccountInput extends PickType(User, [
  'email',
  'password',
  'role',
]) {}

@ObjectType()
export class CreateAccountOutput extends CoreOutput {}
