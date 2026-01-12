import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

console.log('📘 AppModule file loaded');

@Module({
  imports: [UsersModule],
})
export class AppModule {
  constructor() {
    console.log('AppModule constructor executed');
  }
}
