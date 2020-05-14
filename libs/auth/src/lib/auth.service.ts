import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService, User } from '@jwm/users';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<Omit<User, 'passwordHash'>> {
    try {
      console.log(`@AuthService validateUser (username: ${username}, password: ${pass})`);
      if (!username || !pass) {
        throw new UnauthorizedException('Missing username or password!');
      }
      const user = await this.usersService.findOne(username);
      // TODO: Here is where we check the passoword
      if (user && user.passwordHash === pass) {
        const { passwordHash, ...result } = user;
        return result;
      }
    } catch (error) {
      return null;
    }
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload),
    };
  }
}
