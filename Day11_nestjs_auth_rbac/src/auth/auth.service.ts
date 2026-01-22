import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // AUTHENTICATION: verify username + password
  async validateUser(username: string, password: string) {
    const user = this.usersService.findByUsername(username);
    if (!user) return null;

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) return null;

    const { password: _, ...result } = user;
    return result;
  }

  // LOGIN → JWT
  async login(user: any) {
    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // REGISTER → hash password → save → JWT
  async register(dto: RegisterDto) {
    const user = await this.usersService.create(dto);
    return this.login(user);
  }
}

// Authentication = credential verification

// JWT payload stores role (authorization later)
