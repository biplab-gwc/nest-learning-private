import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './users/users.module.js';
import { TweetModule } from './tweet/tweet.module.js';

@Module({
  imports: [UserModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
