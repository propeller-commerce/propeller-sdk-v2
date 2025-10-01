import { CartStatus } from '../enum/CartStatus';
import { CartTotal } from './CartTotal';
/**
 Base interface for cart entities
 */
export interface ICart {
  /** Cart identifier */
  id: string;
  /** Customer identifier */
  customerId?: number;
  /** Cart total */
  total?: CartTotal;
  /** Cart status */
  status?: CartStatus;
  /** Created date */
  createdAt?: string;
  /** Updated date */
  updatedAt?: string;
}