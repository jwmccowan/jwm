import { Controller, Get, UseGuards, UseFilters, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard, JwtAuthGuard } from '@jwm/auth';
import { AuthService } from '@jwm/auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
