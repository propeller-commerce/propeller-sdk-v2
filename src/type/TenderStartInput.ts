import { OrderType } from '../enum/OrderType';
/**
 Input object for TenderStartInput
 */
export interface TenderStartInput {
  /** The channel id for the tender created */
  channelId?: number;
  /** The user ID for the tender created */
  userId?: number;
  /** Contact unique identifier */
  contactId?: number;
  /** Company unique identifier, if not provided the contact original parent company will be set! */
  companyId?: number;
  /** Customer unique identifier */
  customerId?: number;
  /** The id of the user editing the order. Defaults to userId */
  ownerId?: number;
  /** The type for the tender created. Defaults to dropshipment */
  type?: OrderType;
  /** The currency for the tender created. Defaults to EUR */
  currency?: string;
  /** Valid until date (Display Only!) */
  validUntil?: string;
  /** Source of the Tender */
  source?: string;
}