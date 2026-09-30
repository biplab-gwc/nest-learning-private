import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  userServices: UsersService;
  constructor() {
    this.userServices = new UsersService();
  }

  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit, page);
    return this.userServices.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const usersService = new UsersService();
    return usersService.getUserById(id);
  }

  @Post()
  createUser() {
    const dummyUser = {
      name: 'John Doe',
      age: 20,
      gender: 'male',
    };

    const usersService = new UsersService();
    usersService.createUser(dummyUser);
    return 'User created successfully';
  }
}
