import { Restaurant } from './../../restaurants/entities/restuarant.entity';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { IsEmail, IsEnum, IsString, IsBoolean } from 'class-validator';

export enum UserRole {
  Client = "Client",
  Owner = "Owner",
  Delivery = "Delivery",
}

registerEnumType(UserRole, { name: 'UserRole' });

@InputType('UserInputType',{ isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Field((type) => String)
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @Field((type) => String)
  @Column({ select: false })
  @IsString()
  password: string;

  @Field((type) => UserRole)
  @Column({ type: 'enum', enum: UserRole })
  @IsEnum(UserRole)
  role: UserRole;

  @Column({ default: false })
  @Field((type) => Boolean)
  @IsBoolean()
  verified: boolean;

  @Field(type => [Restaurant])
  @OneToMany((type) => Restaurant, (restaurant) => restaurant.category)
  restaurants: Restaurant[];


  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        console.log(error);
        throw new InternalServerErrorException();
      }
    }
  }
  async checkPassword(aPassword: string): Promise<boolean> {
    try {
      const ok = await bcrypt.compare(aPassword, this.password);
      return ok;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
