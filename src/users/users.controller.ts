import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'All users list from controller';
  }

  @Post()
  createUser() {
    return 'User created successfully';
  }
}
