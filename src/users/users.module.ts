import { Verification } from './../restaurants/entities/verification.entity';
import { UserService } from './users.service';
import { UserResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([User,Verification])],
  providers: [UserResolver, UserService],
  exports:[UserService]
})
export class UsersModule {}
