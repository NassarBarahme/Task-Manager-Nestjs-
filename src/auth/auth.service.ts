import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { userName, password } = authCredentialsDto;
    try {
      return await this.userRepository.createUser({
        userName,
        password,
      });
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(
          `User with userName "${userName}" already exists`,
        );
      }
      throw error;
    }
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    return this.userRepository.signIn(authCredentialsDto);
  }
  
}
