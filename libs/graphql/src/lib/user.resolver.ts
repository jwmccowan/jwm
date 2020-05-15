import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, AuthUser } from '@jwm/auth';
import { User, UsersService } from '@jwm/users';
import { User as UserType } from '../graphql.schema.generated';

export interface SetEntity {
  id: number;
  name: string;
  numParts: number;
  year: string;
}

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(returns => UserType)
  @UseGuards(GqlAuthGuard)
  me(@AuthUser() user: User) {
    return this.userService.findById(user.id);
  }
}
