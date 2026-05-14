import { Taxcode } from '../enum/Taxcode';
/**
 Object class for ZoneTaxCode
 */
export interface ZoneTaxCode {
  /** Primary identifier */
  id: string;
  /** Price foreign identifier */
  priceId: string;
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  lastModifiedAt: string;
  /** Zone code */
  zone: string;
  /** Tax code for the specified zone */
  taxCode: Taxcode;
}