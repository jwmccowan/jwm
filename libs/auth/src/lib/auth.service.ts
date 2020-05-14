import { Injectable, UnauthorizedException } from '@nestjs/common';

const users = [
  {
    name: 'John Doe',
    username: 'john.doe@email.com',
    password: 'some-password',
    role: 'admin',
  },
  {
    name: 'Jane Doe',
    username: 'jane.doe@email.com',
    passsword: 'some-other-password',
    role: 'admin',
  },
];

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string): Promise<any> {
    try {
      console.log(`@AuthSService validateUser (username: ${username}, password: ${password})`);
      if (!username || !password) {
        throw new UnauthorizedException('Missing username or password!');
      }
      const { name = undefined, role = undefined } =
        users.find(user => user.username === username && user.password === password) || {};
      if (!name || !role) {
        return null;
      }
      return { name, role };
    } catch (error) {
      return null;
    }
  }
}
