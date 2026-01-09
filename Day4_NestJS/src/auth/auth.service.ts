import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    return {
      message: 'Login successful',
      token: 'DUMMY_TOKEN',
      user: loginDto.email,
    };
  }
}
