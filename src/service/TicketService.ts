import { Ticket } from '../type/Ticket';
import { TicketResponse } from '../type/TicketResponse';
import { TicketSearchInput } from '../type/TicketSearchInput';
import { TicketCreateInput } from '../type/TicketCreateInput';
import { TicketUpdateInput } from '../type/TicketUpdateInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as ticketDoc } from '../generated/operations/ticket';
import { document as ticketsDoc } from '../generated/operations/tickets';
import { document as ticketCreateDoc } from '../generated/operations/ticketCreate';
import { document as ticketUpdateDoc } from '../generated/operations/ticketUpdate';
import { document as ticketDeleteDoc } from '../generated/operations/ticketDelete';
/**
 Service class for Ticket-related GraphQL operations
 */
export function ticketService(client: GraphQLClient) {
  return {
    /**
       Fetches a single ticket by ID
       * @param id Ticket ID to fetch
       * @returns Promise<Ticket> The ticket data
       */
    async getTicket(id: string): Promise<Ticket> {
      const result = await runOperation(client, ticketDoc, 'ticket', { id });
      return result.data.ticket as Ticket;
    },
    /**
       Fetches a list of tickets with search criteria
       * @param input Ticket search input parameters
       * @returns Promise<TicketResponse> The tickets response data
       */
    async getTickets(input?: TicketSearchInput): Promise<TicketResponse> {
      const result = await runOperation(client, ticketsDoc, 'tickets', { input });
      return result.data.tickets as TicketResponse;
    },
    /**
       Creates a new ticket
       * @param input Ticket creation input data
       * @returns Promise<Ticket> The created ticket
       */
    async createTicket(input: TicketCreateInput): Promise<Ticket> {
      const result = await runOperation(client, ticketCreateDoc, 'ticketCreate', { input });
      return result.data.ticketCreate as Ticket;
    },
    /**
       Updates an existing ticket
       * @param id Ticket ID to update
       * @param input Ticket update input data
       * @returns Promise<Ticket> The updated ticket
       */
    async updateTicket(id: string, input: TicketUpdateInput): Promise<Ticket> {
      const result = await runOperation(client, ticketUpdateDoc, 'ticketUpdate', { id, input });
      return result.data.ticketUpdate as Ticket;
    },
    /**
       Deletes a ticket by ID
       * @param id Ticket ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteTicket(id: string): Promise<boolean> {
      const result = await runOperation(client, ticketDeleteDoc, 'ticketDelete', { id });
      return result.data.ticketDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `ticketService(client)`.
 */
export class TicketService {
  private readonly _svc: ReturnType<typeof ticketService>;
  constructor(client: GraphQLClient) { this._svc = ticketService(client); }
  /**
   * Fetches a single ticket by ID
   * @param id Ticket ID to fetch
   */
  getTicket(id: string): Promise<Ticket> { return this._svc.getTicket(id); }
  /**
   * Fetches a list of tickets with search criteria
   * @param input Ticket search input parameters
   */
  getTickets(input?: TicketSearchInput): Promise<TicketResponse> { return this._svc.getTickets(input); }
  /**
   * Creates a new ticket
   * @param input Ticket creation input data
   */
  createTicket(input: TicketCreateInput): Promise<Ticket> { return this._svc.createTicket(input); }
  /**
   * Updates an existing ticket
   * @param id Ticket ID to update
   * @param input Ticket update input data
   */
  updateTicket(id: string, input: TicketUpdateInput): Promise<Ticket> { return this._svc.updateTicket(id, input); }
  /**
   * Deletes a ticket by ID
   * @param id Ticket ID to delete
   */
  deleteTicket(id: string): Promise<boolean> { return this._svc.deleteTicket(id); }
}

