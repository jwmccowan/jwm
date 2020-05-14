import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: '1',
        username: 'john',
        passwordHash: 'changeme',
        role: 'admin',
        name: 'John Doe',
      },
      {
        id: '2',
        username: 'chris',
        passwordHash: 'secret',
        role: 'manager',
        name: 'Chris Secret',
      },
      {
        id: '3',
        username: 'maria',
        passwordHash: 'guesss',
        role: 'user',
        name: 'Maria Guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
