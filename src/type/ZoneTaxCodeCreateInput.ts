import { Taxcode } from '../enum/Taxcode';
/**
 Input object for ZoneTaxCodeCreateInput
 */
export interface ZoneTaxCodeCreateInput {
  /** Price id */
  priceId: string;
  /** Zone code */
  zone: string;
  /** Tax code */
  taxCode: Taxcode;
}