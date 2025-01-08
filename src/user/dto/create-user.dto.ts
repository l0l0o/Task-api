import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'user@user.com' })
  email: string;
  @ApiProperty({ default: '********' })
  password: string;
}
