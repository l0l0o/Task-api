import { ApiProperty } from '@nestjs/swagger';

export default class SignupDto {
  @ApiProperty({ example: 'user@user.com' })
  email: string;
  @ApiProperty({ example: '********' })
  password: string;
}
