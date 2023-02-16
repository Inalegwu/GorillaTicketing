import { Controller, Get, Param, Patch } from '@nestjs/common';
import { Message } from 'src/utils/types';
import { AttendantService } from './attendant.service';

@Controller('attendant')
export class AttendantController {
  constructor(private readonly AttendantService: AttendantService) {}

  //   get the users account information
  @Get('/my_account')
  async getMyAccountInformation() {
    return this.AttendantService.getMyAccountInformation();
  }

  // get all tickets that have been assigned to the user
  // or the user has accepted the ticket
  @Get('/my_tickets')
  async getMyTickets(): Promise<Message> {
    return this.AttendantService.getMyTickets();
  }

  // update attendant account information
  @Patch('/update_my_account')
  async updateMyAccountInformation(): Promise<Message> {
    return this.AttendantService.updateAccountInformation();
  }

  // revoke a users account
  @Patch('revoke_user_account/:user_id')
  async revokeUserAccount(@Param('user_id') user_id: number) {
    return this.AttendantService.revokeUserAccount(user_id);
  }
}
