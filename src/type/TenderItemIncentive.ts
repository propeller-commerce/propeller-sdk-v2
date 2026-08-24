import { OrderItemIncentiveCode } from '../enum/OrderItemIncentiveCode';
/**
 Object class for TenderItemIncentive
 */
export interface TenderItemIncentive {
  /** name field */
  name?: string;
  /** quantity field */
  quantity: number;
  /** price field */
  price: number;
  /** code field */
  code: OrderItemIncentiveCode;
}