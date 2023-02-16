import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  controllers: [TicketController],
  providers: [TicketService, PrismaService],
})
export class TicketModule {}
