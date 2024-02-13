import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get('profile')
  getUserBySub(@Req() req: any) {
    return this.userService.findBySub(req.user.sub);
  }
}
