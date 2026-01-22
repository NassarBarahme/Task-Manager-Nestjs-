import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { userName, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      return await this.userRepository.createUser({
        userName,
        password: hashedPassword,
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

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { userName, password } = authCredentialsDto;
    const user = await this.userRepository.getUserByName(userName);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    if (await bcrypt.compare(password, user.password)) {
      const payload: JwtPayload = { username: userName };
      const accessToken: string = this.jwtService.sign(payload);
      return { accessToken };
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
