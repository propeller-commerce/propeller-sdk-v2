import { BaseService } from './BaseService';
import { Ticket } from '../type/Ticket';
import { TicketResponse } from '../type/TicketResponse';
import { TicketSearchInput } from '../type/TicketSearchInput';
import { TicketCreateInput } from '../type/TicketCreateInput';
import { TicketUpdateInput } from '../type/TicketUpdateInput';
/**
 Service class for Ticket-related GraphQL operations
 */
export class TicketService extends BaseService {
  /**
   Fetches a single ticket by ID
   * @param id Ticket ID to fetch
   * @returns Promise<Ticket> The ticket data
   */
  async getTicket(id: string): Promise<Ticket> {
    const variables = { id };
    const result = await this.executeQuery('ticket', variables);
    return new Ticket(result.data.ticket);
  }
  /**
   Fetches a list of tickets with search criteria
   * @param input Ticket search input parameters
   * @returns Promise<TicketResponse> The tickets response data
   */
  async getTickets(input?: TicketSearchInput): Promise<TicketResponse> {
    const variables = { input };
    const result = await this.executeQuery('tickets', variables);
    return new TicketResponse(result.data.tickets);
  }
  /**
   Creates a new ticket
   * @param input Ticket creation input data
   * @returns Promise<Ticket> The created ticket
   */
  async createTicket(input: TicketCreateInput): Promise<Ticket> {
    const variables = { input };
    const result = await this.executeMutation('ticketCreate', variables);
    return new Ticket(result.data.ticketCreate);
  }
  /**
   Updates an existing ticket
   * @param id Ticket ID to update
   * @param input Ticket update input data
   * @returns Promise<Ticket> The updated ticket
   */
  async updateTicket(id: string, input: TicketUpdateInput): Promise<Ticket> {
    const variables = { id, input };
    const result = await this.executeMutation('ticketUpdate', variables);
    return new Ticket(result.data.ticketUpdate);
  }
  /**
   Deletes a ticket by ID
   * @param id Ticket ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteTicket(id: string): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('ticketDelete', variables);
    return result.data.ticketDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}
