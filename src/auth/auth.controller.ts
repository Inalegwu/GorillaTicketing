import { Body, Controller, Post } from '@nestjs/common';
import { AuthDTO } from 'src/DTO/Auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post('/login')
  async login(@Body() user: AuthDTO) {
    return this.AuthService.login(user);
  }

  @Post('/sign_up')
  async signUp(@Body() user: AuthDTO) {
    return this.AuthService.signUp(user);
  }
}
