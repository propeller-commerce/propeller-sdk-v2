import { TicketStatus } from '../enum/TicketStatus';
import { LocalizedStringInput } from './LocalizedStringInput';
import { SourceInput } from './SourceInput';
/**
 Input object for TicketCreateInput
 Input parameters for creating a new ticket.
 */
export interface TicketCreateInput {
  /** Localized human-readable titles */
  titles: LocalizedStringInput[];
  /** Localized human-readable descriptions */
  descriptions?: LocalizedStringInput[];
  /** Localized human-readable labels for the action button */
  buttonLabels?: LocalizedStringInput[];
  /** Type of the ticket (SCREAMING_SNAKE_CASE, max 255 characters) */
  type?: string;
  /** Status of the ticket */
  status?: TicketStatus;
  /** Identifier of the admin user assigned to this ticket */
  assignedToAdminUserId?: number;
  /** Identifier of the contact associated with this ticket */
  contactId?: number;
  /** Identifier of the customer associated with this ticket */
  customerId?: number;
  /** Identifier of the product associated with this ticket */
  productId?: number;
  /** Identifier of the cluster associated with this ticket */
  clusterId?: number;
  /** Identifier of the order associated with this ticket */
  orderId?: number;
  /** Identifier of the company associated with this ticket */
  companyId?: number;
  /** Email address of the contact associated with this ticket */
  email?: string;
  /** Phone number of the contact associated with this ticket */
  phone?: string;
  /** External URL associated with this ticket (max 255 characters) */
  externalUrl?: string;
  /** External sources of the ticket */
  sources?: SourceInput[];
}
