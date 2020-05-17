import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { jwtConstants } from '../constant';
import { Request } from 'express';
import { AuthService } from '../auth.service';

const cookieExtractor = (req: Request): string | null => req?.cookies?.token || null;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate({ sub: id }: { sub: string }) {
    // TODO: here we can add businesss logic, like checking against revoked users
    // or doing a db lookup to provide a more enriched user to the response
    console.log('eggs', id);
    return this.authService.validate({ id });
  }
}
