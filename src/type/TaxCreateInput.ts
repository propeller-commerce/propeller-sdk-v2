import { TaxCode } from '../enum/TaxCode';
/**
 Input object for TaxCreateInput
 */
export interface TaxCreateInput {
  /** Shop identifier for the tax to apply to... If not provided the default will be inferred from the channel */
  shopId: number;
  /** Tax code */
  code?: TaxCode;
  /** Tax zone */
  zone: string;
  /** Tax percentage */
  percentage?: number;
  /** Tax export code */
  exportCode?: string;
}