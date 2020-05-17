import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user.resolver';
import { GraphqlOptions } from './graphql.options';
import { UsersService } from '@jwm/users';
import { AuthResolver } from './auth.resolver';
import { AuthService, jwtConstants } from '@jwm/auth';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1000s' },
    }),
  ],
  controllers: [],
  providers: [UserResolver, AuthResolver, AuthService, UsersService],
  exports: [],
})
export class GraphqlModule {}
