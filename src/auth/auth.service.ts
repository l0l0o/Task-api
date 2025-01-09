import { Injectable } from '@nestjs/common';
import SigninDto from './dto/signin.dto';
import SignupDto from './dto/signup.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  signin(signinDto: SigninDto) {
    return 'This action sign in';
  }
  async signup(signupDto: SignupDto) {
    // crypter le mot de passe
    console.log(
      '🚀 ~ AuthService ~ signup ~ signupDto.password:',
      signupDto.password,
    );
    const password = await bcrypt.hash(signupDto.password, 10);
    signupDto.password = password;

    console.log(
      '🚀 ~ AuthService ~ signup ~ signupDto.password:',
      signupDto.password,
    );
    // sauvegarder l'utilisateur dans la base de données

    return this.userService.create(signupDto);
  }
}
