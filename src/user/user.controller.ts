import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDTO } from 'src/DTO/User.dto';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('/my_account')
  async getMyAccountInformation() {
    return this.UserService.getMyAccountInformation();
  }

  @Patch('/edit_my_account')
  async editMyAccount(@Body() userDto: UserDTO) {
    return this.UserService.editMyAccount(userDto);
  }

  @Delete('/delete_my_account')
  async deleteMyAccount(@Body() user: User) {
    return this.UserService.deleteMyAccount(user);
  }

  @Post('/report_attendant/:attendant_id')
  async reportAttendant(@Param('attendant_id') attendant_id: number) {
    return this.UserService.reportAttendant(attendant_id);
  }
}
