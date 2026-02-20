import { TicketSortField } from '../enum/TicketSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for TicketSortInput
 */
export interface TicketSortInput {
  /** Field to sort tickets by */
  field: TicketSortField;
  /** Sort direction for the specified field */
  order: SortOrder;
}
