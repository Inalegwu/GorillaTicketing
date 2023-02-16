import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/DTO/User.dto';
import { Message } from 'src/utils/types';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  async getMyAccountInformation(): Promise<Message> {
    return { message: 'Successful' };
  }

  async editMyAccount(userDto: UserDTO): Promise<Message> {
    return { message: 'Successful' };
  }

  async deleteMyAccount(user_id: User): Promise<Message> {
    return { message: 'successful' };
  }

  async reportAttendant(attendant_id: number): Promise<Message> {
    return { message: 'Successful' };
  }
}
