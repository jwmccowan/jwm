import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService, User } from '@jwm/users';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<Omit<User, 'passwordHash'>> {
    try {
      console.log(`@AuthService validateUser (email: ${email}, password: ${pass})`);
      if (!email || !pass) {
        throw new UnauthorizedException('Missing email or password!');
      }
      const user = await this.usersService.findByEmail(email);
      // TODO: Here is where we check the passoword
      if (user && user.passwordHash === pass) {
        const { passwordHash, ...result } = user;
        return result;
      }
    } catch (error) {
      return null;
    }
  }

  public async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      jwt: this.jwtService.sign(payload),
    };
  }

  public async passwordCompare(passwordToTest: string, passwordHash: string) {
    return compare(passwordToTest, passwordHash);
  }

  public async hashPassword(password: string) {
    return hash(password, await genSalt(12));
  }

  public async validate({ id }): Promise<User> {
    const user = await this.usersService.findById(id);
    console.log('eggs', id, user);
    if (!user) {
      throw new UnauthorizedException('Authenticate validation error');
    }
    return user;
  }
}
