import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ default: 'Exemple title: Homework' })
  title: string;
  @ApiPropertyOptional({ default: 'Exemple description' })
  description?: string;
  @ApiPropertyOptional({ default: 'user@user.com' })
  completed?: boolean;
}
