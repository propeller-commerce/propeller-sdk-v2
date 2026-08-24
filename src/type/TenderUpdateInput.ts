import { OrderType } from '../enum/OrderType';
/**
 Input object for TenderUpdateInput
 */
export interface TenderUpdateInput {
  /** Status of this tender */
  status?: string;
  /** User's reference for this tender */
  reference?: string;
  /** User's remarks for this tender */
  remarks?: string;
  /** The email address to send the confirmation to */
  email?: string;
  /** The type for the tender.  One of: [dropshipment, purchase, quotation, stock] */
  type?: OrderType;
  /** Valid until date (Display Only!) */
  validUntil?: string;
  /** Tender/order origin */
  source?: string;
}