import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

// DTO for creating a todo
export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  completed: boolean;
}
