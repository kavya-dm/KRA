import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class AuthGuard implements CanActivate {
canActivate(context: ExecutionContext): boolean {
const request = context.switchToHttp().getRequest();
const apiKey = request.headers['x-api-key'];


if (apiKey !== 'SECRET_KEY') {
throw new UnauthorizedException('Invalid or missing API key');
}


return true;
}
}
// Authorisation