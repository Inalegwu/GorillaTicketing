import { Injectable } from '@nestjs/common';
import { Attendant, Priority, Ticket, User } from '@prisma/client';
import { TicketDTO } from 'src/DTO/Ticket.dto';
import { PrismaService } from 'src/prisma.service';
import { Message } from 'src/utils/types';

@Injectable()
export class TicketService {
  constructor(private Prisma: PrismaService) {}

  // get all tickets in the database
  async getAllTickets(): Promise<Message> {
    try {
      const tickets = await this.Prisma.ticket.findMany({});

      return { message: 'Successful', tickets };
    } catch (e) {
      return { message: 'Failed', error: e };
    }
  }

  // create a ticket
  async createTicket(ticketData: Ticket, user: User): Promise<Message> {
    try {
      const ticket_holder = await this.Prisma.user.findFirst({
        where: { id: user.id },
      });
      ticketData.holderId = ticket_holder.id;

      const created_ticket = await this.Prisma.ticket.create({
        data: ticketData,
      });
      return { message: 'Success', ticket: created_ticket };
    } catch (e) {
      return { message: 'Failed', error: e.message.toString() };
    }
  }

  // update a ticket
  // update the information in a ticket
  async updateTicket(ticket: Ticket, ticket_id: number): Promise<Message> {
    console.log(`Successfully Updated Ticket ${ticket_id}`);
    return { message: 'Success', ticket };
  }

  // revoke a ticket => a user has created a ticket that doesn't matter
  // or the issue is easily resolvable OR most likely , someone has sent in
  // a useless ticket
  async revokeTicket(id: number): Promise<Message> {
    try {
      const revokedTicket = await this.Prisma.ticket.update({
        where: { id },
        data: {
          isRevoked: true,
        },
      });
      return { message: 'Successful', ticket: revokedTicket };
    } catch (e) {
      return { message: 'Failed', error: e };
    }
  }

  // accept a ticket => an attendant takes the ticket and is then responsible
  // for the resolution of the ticket
  async acceptTicket(
    ticket_id: number,
    requestingAttendant: Attendant,
  ): Promise<Message> {
    try {
      const attendant = await this.Prisma.attendant.findFirst({
        where: { id: requestingAttendant.id },
      });
      const accepted_ticket = await this.Prisma.ticket.update({
        where: { id: ticket_id },
        data: { attendantId: attendant.id },
      });
      return { message: 'Successfull', ticket: accepted_ticket };
    } catch (e) {
      return { message: 'Failed', error: e };
    }
  }

  // delete a ticket => meaning the ticket has been address and is removed
  // for declutter purposes
  async deleteTicket(ticket_id: number): Promise<Message> {
    console.log(`Successfully Deleted ${ticket_id}`);
    return { message: 'Successful' };
  }

  // close a ticket => this implies the problem related to a ticket is closed
  async closeTicket(ticket_id: number): Promise<Message> {
    console.log(`Successfully Closed ${ticket_id}`);
    return { message: 'Successful' };
  }
}
