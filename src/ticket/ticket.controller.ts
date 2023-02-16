import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Attendant, User } from '@prisma/client';
import { TicketDTO } from 'src/DTO/Ticket.dto';
import { Message } from 'src/utils/types';
import { TicketService } from './ticket.service';
import { Ticket } from '@prisma/client';
import GetUser from 'src/decorators/getuser.decorator';
import GetAttendant from 'src/decorators/getattendant.decorator';

@Controller('ticket')
export class TicketController {
  constructor(private readonly TicketService: TicketService) {}

  // get tickets
  @Get('/all_tickets')
  async getAllTickets(): Promise<Message> {
    return this.TicketService.getAllTickets();
  }

  //   create a new ticket
  @Post('/create_ticket')
  async create_ticket(
    @Body() ticketData: Ticket,
    @GetUser() user: User,
  ): Promise<Message> {
    return this.TicketService.createTicket(ticketData, user);
  }

  //   update ticket
  @Patch('update_ticket/:id')
  async update_ticket(
    @Body() ticket: Ticket,
    @Param('id') ticket_id: number,
  ): Promise<Message> {
    return this.TicketService.updateTicket(ticket, ticket_id);
  }

  //   revoke ticket
  @Patch('revoke_ticket/:id')
  async revokeTicket(@Param('id') id: number): Promise<Message> {
    return this.TicketService.revokeTicket(id);
  }

  //   accept_ticket
  @Patch('/accept_ticket/:id')
  async acceptTicket(
    @Param('id') ticket_id: number,
    @GetAttendant() attendant: Attendant,
  ): Promise<Message> {
    return this.TicketService.acceptTicket(ticket_id, attendant);
  }

  //   delete ticket
  @Delete('/delete_ticket/:id')
  async deleteTicket(@Param('id') ticket_id: number): Promise<Message> {
    return this.TicketService.deleteTicket(ticket_id);
  }

  //   close ticket
  @Patch('/close_ticket/:id')
  async closeTicket(@Param('id') ticket_id: number): Promise<Message> {
    return this.TicketService.closeTicket(ticket_id);
  }
}
