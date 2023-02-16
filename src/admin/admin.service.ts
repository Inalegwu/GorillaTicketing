import { Injectable } from '@nestjs/common';
import { Message } from 'src/utils/types';

@Injectable()
export class AdminService {
  async fetchAllUsers(): Promise<Message> {
    return { message: 'Successful' };
  }
  async fetchAllAttendants(): Promise<Message> {
    return { message: 'Successful' };
  }
  async decommissionAttendant(attendant_id: number): Promise<Message> {
    console.log(`${attendant_id}`);
    return { message: 'Successfull' };
  }
  async lockoutUser(user_id: number): Promise<Message> {
    console.log(`${user_id}`);
    return { message: 'Successful' };
  }
}
