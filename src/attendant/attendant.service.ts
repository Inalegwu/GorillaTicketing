import { Injectable } from '@nestjs/common';
import { Message } from 'src/utils/types';

@Injectable()
export class AttendantService {
  // get an attendants information
  async getMyAccountInformation() {
    console.log('your account');
    return 'hello there';
  }

  //   get all the tickets that an attendant is in charge of
  async getMyTickets(): Promise<Message> {
    return { message: 'Success' };
  }

  async updateAccountInformation(): Promise<Message> {
    return { message: 'Successful' };
  }

  async revokeUserAccount(user_id: number): Promise<Message> {
    console.log(`Successfully Revoked User : ${user_id}'s Account`);
    return { message: 'Successfull' };
  }
}
