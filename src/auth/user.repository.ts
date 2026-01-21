import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    const newUser: User = this.userRepository.create(user);
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    newUser.password = hashedPassword;
    return await this.userRepository.save(newUser);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const { userName, password } = authCredentialsDto;
    const user = await this.userRepository.findOne({
      where: { userName },
    });
    if (user && await bcrypt.compare(password, user.password)) {
      return user.userName;
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
