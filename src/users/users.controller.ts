import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';

@Controller('users')
export class UsersController {
  userServices: UsersService;
  constructor() {
    this.userServices = new UsersService();
  }

  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(1), ParseIntPipe) limit: number,
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
  createUser(@Body(new ValidationPipe()) user: CreateUserDto) {
    // const usersService = new UsersService();
    // usersService.createUser(user);
    return 'User created successfully';
  }
}
