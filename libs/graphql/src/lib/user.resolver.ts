import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, AuthUser, AuthService } from '@jwm/auth';
import { User, UsersService, SignUpInputDto } from '@jwm/users';
import { User as UserType } from '../graphql.schema.generated';
import { ResGql } from './decorators';
import { Response } from 'express';

export interface SetEntity {
  id: number;
  name: string;
  numParts: number;
  year: string;
}

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UsersService, private readonly authService: AuthService) {}

  @Query(returns => UserType)
  @UseGuards(GqlAuthGuard)
  me(@AuthUser() user: User) {
    return this.userService.findById(user.id);
  }

  @Mutation()
  public async signup(@Args('signUpInput') signUpInputDto: SignUpInputDto, @ResGql() res: Response) {
    const emailExists = await this.userService.findByEmail(signUpInputDto.email);
    if (emailExists) {
      throw new Error('Email is already in use');
    }
    const password = await this.authService.hashPassword(signUpInputDto.password);

    const user = await this.userService.addUser({ ...signUpInputDto, password });

    const { jwt } = await this.authService.login(user);
    res.cookie('token', jwt, { httpOnly: true });

    return user;
  }
}
