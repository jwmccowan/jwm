import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from '@jwm/auth';
import { UsersService, SignUpInputDto } from '@jwm/users';
import { UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { LoginInput } from '../graphql.schema.generated';
import { ResGql } from './decorators';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly auth: AuthService, private readonly users: UsersService) {}

  @Mutation()
  public async login(@Args('loginInput') { email, password }: LoginInput, @ResGql() res: Response) {
    const user = await this.users.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Email incorrect');
    }

    const valid = await this.auth.passwordCompare(password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Password incorrect');
    }

    const { jwt } = await this.auth.login(user);
    res.cookie('token', jwt, { httpOnly: true });

    const { passwordHash, ...cleanedUser } = user;
    return cleanedUser;
  }
}
