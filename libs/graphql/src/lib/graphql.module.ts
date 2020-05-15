import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user.resolver';
import { GraphqlOptions } from './graphql.options';
import { UsersService } from '@jwm/users';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
  ],
  controllers: [],
  providers: [UsersService, UserResolver],
  exports: [],
})
export class GraphqlModule {}
