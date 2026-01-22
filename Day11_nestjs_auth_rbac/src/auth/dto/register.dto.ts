import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export class RegisterDto {
  @IsString()
  username: string;

  @MinLength(6)
  password: string;

  // Optional: admin creation only (normally restricted)
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
