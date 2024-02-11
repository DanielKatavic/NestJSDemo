import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UserDto } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() user: UserDto) {
    return this.authService.login(user);
  }

  @Public()
  @Put('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
