/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';

import { AppModule } from './app/app.module';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  app.use(cookieParser());
  app.use(cookieSession({ secret: 'process.env.COOKIE_SESSION_SECRET' }));
  app.use(passport.initialize());
  app.use(passport.session());
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' /* + globalPrefix*/);
  });
}

bootstrap();
