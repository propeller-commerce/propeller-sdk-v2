import { Ticket } from './Ticket';
/**
 Object class for TicketResponse
 */
export interface TicketResponse {
  /** List of items of type Ticket */
  items: Ticket[];
  /** Total number of items found */
  itemsFound: number;
  /** The amount of items to show per page */
  offset: number;
  /** The current page */
  page: number;
  /** Total amount of pages */
  pages: number;
  /** Start position of the current page */
  start: number;
  /** End position of the current page */
  end: number;
}
