/* eslint-disable prettier/prettier */
import { Attendant, Ticket, User } from '@prisma/client';

export interface Message {
  message: string;
  attendant?: Attendant;
  user?: User;
  attendants?: Attendant[];
  users?: User[];
  ticket?: Ticket;
  tickets?: Ticket[];
  error?: string;
}
