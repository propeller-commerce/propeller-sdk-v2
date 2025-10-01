import { Sort } from '../enum/Sort';
import { MediaLocalizedStringInput } from './MediaLocalizedStringInput';
/**
 Input object for MediaDocumentProductSearchInput
 */
export interface MediaDocumentProductSearchInput {
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