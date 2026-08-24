import { PriceDiscountType } from '../enum/PriceDiscountType';
import { DateSearchInput } from './DateSearchInput';
import { DecimalSearchInput } from './DecimalSearchInput';
import { NumberSearchInput } from './NumberSearchInput';
import { DiscountSortInput } from './DiscountSortInput';
/**
 Input object for DiscountSearchInput
 */
export interface DiscountSearchInput {
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
  /** Search by pricesheet ids */
  pricesheetIds?: string[];
  /** Search by product ids */
  productIds?: number[];
  /** Search by category ids */
  categoryIds?: number[];
  /** Search by price groups */
  priceGroups?: string[];
  /** Search by values */
  value?: DecimalSearchInput;
  /** Discount type. One of: [costpriceplus, listpricemin, netprice] */
  discountTypes?: PriceDiscountType[];
  /** Search by quantity from */
  quantityFrom?: NumberSearchInput;
  /** Inputs to sort by */
  sortInputs?: DiscountSortInput[];
  /** Search by valid from */
  validFrom?: DateSearchInput;
  /** Search by valid to */
  validTo?: DateSearchInput;
}