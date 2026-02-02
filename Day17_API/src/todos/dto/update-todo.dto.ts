import { IsBoolean, IsOptional, IsString } from 'class-validator';

// DTO for updating a todo
export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
