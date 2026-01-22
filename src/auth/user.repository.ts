import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    const newUser: User = this.userRepository.create(user);

    return this.userRepository.save(newUser);
  }

  async getUserByName(userName: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ userName });
    return user;
  }
}
