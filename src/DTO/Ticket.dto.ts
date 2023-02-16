/* eslint-disable prettier/prettier */
import { Priority } from '@prisma/client';

/* eslint-disable prettier/prettier */
export interface TicketDTO {
  ticket_holder: string;
  priority: Priority;
}
