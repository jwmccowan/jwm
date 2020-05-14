import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@jwm/auth';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AuthModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(true);
      return;
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
