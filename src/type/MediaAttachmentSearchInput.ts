import { Sort } from '../enum/Sort';
import { MediaLocalizedStringInput } from './MediaLocalizedStringInput';
/**
 Input object for MediaAttachmentSearchInput
 */
export interface MediaAttachmentSearchInput {
  /** Search by unique spareparts machine identifier */
  sparePartsMachineId?: string;
  /** Search by media item short description. */
  description?: MediaLocalizedStringInput;
  /** Search by media item tags. */
  tag?: MediaLocalizedStringInput;
  /** Media item search sort [Default=ASC] */
  sort?: Sort;
  /** Pagination - page number [default=1] */
  page?: number;
  /** Pagination - offset number [default=12] */
  offset?: number;
  /** Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId] */
  orderId?: number;
  /** Unique company identifier that the attachment relates to. [Cannot use it together with customerId] */
  companyId?: number;
  /** Unique customer identifier that the attachment relates to. [Cannot use it together with companyId] */
  customerId?: number;
}