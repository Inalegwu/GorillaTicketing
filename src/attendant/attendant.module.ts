import { Module } from '@nestjs/common';
import { AttendantController } from './attendant.controller';
import { AttendantService } from './attendant.service';

@Module({
  controllers: [AttendantController],
  providers: [AttendantService]
})
export class AttendantModule {}
