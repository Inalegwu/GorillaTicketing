import { Injectable } from '@nestjs/common';
import { encode } from 'punycode';
import { AuthDTO } from 'src/DTO/Auth.dto';
import { Message } from 'src/utils/types';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly PrismaService: PrismaService) {}

  async login(user: AuthDTO): Promise<Message> {
    return { message: 'Successful' };
  }

  async signUp(user: AuthDTO): Promise<Message> {
    const { signature } = await this.signToken(user.password);
    try {
      const createdUser = await this.PrismaService.user.create({
        data: { email: user.email, name: user.name, password: signature },
      });

      delete createdUser.password;
      delete createdUser.id;

      return { message: 'Created Account Successfully', user: createdUser };
    } catch (e) {
      return { message: e };
    }
    return { message: 'Successfull' };
  }

  async signToken(password: string): Promise<{ signature: string }> {
    // convert this to an argon2 hashing...
    const signature = await argon.hash(password);
    return { signature };
  }
}
