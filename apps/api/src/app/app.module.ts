import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@jwm/auth';
import { GraphqlModule } from '@jwm/graphql';

@Module({
  imports: [AuthModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
