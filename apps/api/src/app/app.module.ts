import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@jwm/auth';
import { GraphqlModule } from '@jwm/graphql';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [AuthModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
