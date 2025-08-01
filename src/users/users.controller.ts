import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
  GET /users
  GET /users/:id
  POST /users
  PATCH /user.:id
  DELETE /users/:id
  */

  @Get() //GET /users
  findAll() {
    return [];
  }

  @Get() //GET users/:id
  findOne() {
    return {};
  }
}
