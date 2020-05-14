import { Module, DynamicModule } from '@nestjs/common';
import { PassportModule, IAuthModuleOptions } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy, SessionSerializer } from './providers';
import { AuthController } from './auth.controller';

export interface AuthModuleOptions extends IAuthModuleOptions {
  successRedirect: string;
  failureRedirect: string;
}

@Module({
  imports: [
    PassportModule.register({
      session: true,
      successRedirect: '/secured-page',
      failureRedirect: '/login-page',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
  exports: [PassportModule, AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {
  static register({ successRedirect, failureRedirect }: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        PassportModule.register({
          session: true,
          successRedirect,
          failureRedirect,
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService, LocalStrategy, SessionSerializer],
      exports: [PassportModule, AuthService, LocalStrategy, SessionSerializer],
    };
  }
}
