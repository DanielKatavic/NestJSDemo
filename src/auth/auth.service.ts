import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: User) {
    const user = await this.userService.findOne(userDto);

    if (user.password !== userDto.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
