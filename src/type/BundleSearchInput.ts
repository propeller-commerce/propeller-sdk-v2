import { BundleSortInput } from './BundleSortInput';
/**
 Input object for BundleSearchInput
 */
export interface BundleSearchInput {
  /** Bundle IDs */
  ids?: string[];
  /** Product IDs */
  productIds?: number[];
  /** Tax zone */
  taxZone?: string;
  /** page input field */
  page: number;
  /** offset input field */
  offset: number;
  /** Inputs to sort by */
  sortInputs?: BundleSortInput[];
}