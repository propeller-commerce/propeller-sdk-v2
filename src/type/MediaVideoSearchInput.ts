import { Sort } from '../enum/Sort';
import { MediaLocalizedStringInput } from './MediaLocalizedStringInput';
/**
 Input object for MediaVideoSearchInput
 */
export interface MediaVideoSearchInput {
  /** Search by unique product identifier */
  productId?: number;
  /** Search by unique category identifier */
  categoryId?: number;
  /** Search by unique cluster identifier */
  clusterId?: number;
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
}