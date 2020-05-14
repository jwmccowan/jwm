import { Controller, Get, UseGuards, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard, Unauthorized } from '@jwm/auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('secured-page')
  @UseGuards(AuthenticatedGuard)
  @UseFilters(Unauthorized)
  async securedPage() {
    console.log('@AppController /secured-page');
    return 'secured-page';
  }

  @Get('login-page')
  async loginPage() {
    console.log('@AppController /login-page');
    return 'login page';
  }
}
