import { Taxcode } from '../enum/Taxcode';
/**
 Input object for ZoneTaxCodeUpdateInput
 */
export interface ZoneTaxCodeUpdateInput {
  /** Zone code */
  zone?: string;
  /** Tax code */
  taxCode?: Taxcode;
}