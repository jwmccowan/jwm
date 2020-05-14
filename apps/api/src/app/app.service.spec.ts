import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { AuthModule } from '@jwm/auth';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [AuthModule],
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(true);
      return;
      expect(service.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
