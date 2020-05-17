import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entity';
import { SignUpInputDto } from './dtos';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: '1',
        email: 'john',
        passwordHash: 'changeme',
        role: 'admin',
        name: 'John Doe',
      },
      {
        id: '2',
        email: 'chris',
        passwordHash: 'secret',
        role: 'manager',
        name: 'Chris Secret',
      },
      {
        id: '3',
        email: 'maria',
        passwordHash: 'guesss',
        role: 'user',
        name: 'Maria Guess',
      },
    ];
  }

  generateUUID() {
    return uuidv4();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    console.log('eggs', email, this.users);
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<User | undefined> {
    console.log(id, this.users);
    return this.users.find(user => user.id === id);
  }

  async addUser(user: SignUpInputDto): Promise<User> {
    const newUser = {
      id: this.generateUUID(),
      email: user.email,
      role: user.role || 'user',
      passwordHash: user.password,
      name: user.name || user.email,
    };
    this.users.push(newUser);
    return newUser;
  }
}
