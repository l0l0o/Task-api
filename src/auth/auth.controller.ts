import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import signupDto from './dto/signup.dto';
import SigninDto from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() body: SigninDto) {
    return this.authService.signin(body);
  }

  @Post('signup')
  signUp(@Body() body: signupDto) {
    return this.authService.signup(body);
  }
}
