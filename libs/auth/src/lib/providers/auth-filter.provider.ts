import { Catch, UnauthorizedException, ForbiddenException, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { LocalStrategy } from './local-strategy.provider';
import { Response } from 'express';

@Catch(UnauthorizedException, ForbiddenException)
export class Unauthorized implements ExceptionFilter {
  constructor(private readonly strategy: LocalStrategy) {}
  catch(_exception: ForbiddenException | UnauthorizedException, host: ArgumentsHost) {
    console.log(_exception instanceof ForbiddenException ? '@Forbidden' : '@Unauthorized');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.redirect(this.strategy.failureRedirect);
  }
}
