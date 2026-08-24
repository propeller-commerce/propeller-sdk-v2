import { OrderType } from '../enum/OrderType';
import { OrderSearchFields } from '../enum/OrderSearchFields';
import { OrderExportStatus } from '../enum/OrderExportStatus';
import { DateSearchInput } from './DateSearchInput';
import { OrderSortInput } from './OrderSortInput';
import { DecimalSearchInput } from './DecimalSearchInput';
import { SourceInput } from './SourceInput';
/**
 Input object for OrderSearchArguments
 */
export interface OrderSearchArguments {
  /** Pagination page number */
  page: number;
  /** Pagination offset number */
  offset: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: OrderSortInput[];
  /** Pass one order more userId's to retrieve order for */
  userId?: number[];
  /** Only search for orders in these statuses */
  status?: string[];
  /** Only search for orders of the types */
  type?: OrderType[];
  /** Search term */
  term?: string;
  /** List of fields to search in */
  termFields?: OrderSearchFields[];
  /** Search by price range */
  price?: DecimalSearchInput;
  /** Search by company ids */
  companyIds?: number[];
  /** List of company sources */
  companySources?: SourceInput[];
  /** Search by original order ids */
  originalOrderIds?: number[];
  /** Only search for orders with export status */
  exportStatuses?: OrderExportStatus[];
  /** Search by export date */
  exportedAt?: DateSearchInput;
}