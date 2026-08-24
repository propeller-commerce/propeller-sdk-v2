import { TaxCode } from '../enum/TaxCode';
/**
 Input object for ZoneTaxCodeUpdateInput
 */
export interface ZoneTaxCodeUpdateInput {
  /** Zone code */
  zone?: string;
  /** Tax code */
  taxCode?: TaxCode;
}