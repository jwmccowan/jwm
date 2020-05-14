import { Controller, Post, UseGuards, UseFilters, Req, Res } from '@nestjs/common';
import { LocalStrategy } from './providers/local-strategy.provider';
import { LoginGuard } from './providers/login-guard.provider';
import { Unauthorized } from './providers/auth-filter.provider';

@Controller()
export class AuthController {
  constructor(private readonly strategy: LocalStrategy) {}

  @Post('login')
  @UseGuards(LoginGuard)
  @UseFilters(Unauthorized)
  async login(@Req() req, @Res() res) {
    console.log(`@AuthController /login ${JSON.stringify(req.user)}`);
    return req.user ? res.redirect(this.strategy.successRedirect) : res.redirect(this.strategy.failureRedirect);
  }
}
