import { ApiProperty } from '@nestjs/swagger';

export default class SigninDto {
  @ApiProperty({ example: 'user@user.com' })
  email: string;
  @ApiProperty({ example: '********' })
  password: string;
}
