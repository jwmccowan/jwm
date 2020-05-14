import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  public serializeUser(user: any, done: (err: any, id?: any) => void) {
    console.log('@SessionSerializer serializeUser');
    done(null, user);
  }
  public deserializeUser(payload: any, done: (err: any, id?: any) => void) {
    console.log('@SessionSerializer deserializeUser');
    done(null, payload);
  }
}
