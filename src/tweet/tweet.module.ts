import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller.js';

@Module({
  controllers: [TweetController]
})
export class TweetModule {}
