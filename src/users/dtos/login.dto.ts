import { User } from './../entities/user.entity';
import { ObjectType, Field, PickType, InputType } from '@nestjs/graphql';
import { MutationOuput } from './../../common/dtos/output.dto';

@InputType()
export class LoginInput extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class LoginOutput extends MutationOuput {
    @Field(type => String, { nullable: true })
    token?: string;
}
