import { TaxCode } from '../enum/TaxCode';
/**
 Input object for TaxCreateInput
 */
export interface TaxCreateInput {
  /** Tax code */
  code?: TaxCode;
  /** Tax zone */
  zone: string;
  /** Tax percentage */
  percentage?: number;
  /** Tax export code */
  exportCode?: string;
}