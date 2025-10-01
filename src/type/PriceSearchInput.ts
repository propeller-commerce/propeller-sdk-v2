import { PriceDiscountType } from '../enum/PriceDiscountType';
import { DateSearchInput } from './DateSearchInput';
import { DecimalSearchInput } from './DecimalSearchInput';
import { PriceSortInput } from './PriceSortInput';
/**
 Input object for PriceSearchInput
 */
export interface PriceSearchInput {
  /** Pagination page number */
  page?: number;
  /** Pagination offset number */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Search by ids */
  ids?: string[];
  /** Search by product ids */
  productIds?: number[];
  /** Search for price per */
  per?: number;
  /** Search for list price */
  list?: DecimalSearchInput;
  /** Search for cost price */
  cost?: DecimalSearchInput;
  /** Search for suggested price */
  suggested?: DecimalSearchInput;
  /** Search for store price */
  store?: DecimalSearchInput;
  /** Bulk discount type. One of: [costpriceplus, listpricemin, netprice] */
  bulkDiscountType?: PriceDiscountType;
  /** Inputs to sort by */
  sortInputs?: PriceSortInput[];
}