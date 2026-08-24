import { TaxCode } from '../enum/TaxCode';
/**
 Input object for ZoneTaxCodeCreateInput
 */
export interface ZoneTaxCodeCreateInput {
  /** Price id */
  priceId: string;
  /** Zone code */
  zone: string;
  /** Tax code */
  taxCode: TaxCode;
}