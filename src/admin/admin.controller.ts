import { Controller, Get, Param, Patch } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly AdminService: AdminService) {}

  @Get('/get_all_users')
  async fetchAllUsers() {
    return this.AdminService.fetchAllUsers();
  }

  @Get('get_all_attendants')
  async fetchAllAttendants() {
    return this.AdminService.fetchAllAttendants();
  }

  @Patch('/decommission_attendant/:attendant_id')
  async decommissionAttendant(@Param('attendant_id') attendant_id: number) {
    return this.AdminService.decommissionAttendant(attendant_id);
  }

  @Patch('/lockout_user/:user_id')
  async lockoutUser(@Param('user_id') user_id: number) {
    return this.AdminService.lockoutUser(user_id);
  }
}
