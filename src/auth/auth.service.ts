import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { LoginResponseDto } from './login-response.dto';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    return {
      token: 'Teste',
      user: undefined,
    };
  }

}
