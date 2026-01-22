import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// AUTHENTICATION GUARD
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
