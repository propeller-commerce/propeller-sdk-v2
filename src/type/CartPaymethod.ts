import { Taxcode } from '../enum/Taxcode';
/**
 Object class for CartPaymethod
 */
export interface CartPaymethod {
  /** Paymethod code */
  code: string;
  /** Paymethod name */
  name: string;
  /** External code */
  externalCode?: string;
  /** Paymethod type */
  type?: string;
  /** Tax code */
  taxCode?: Taxcode;
  /** Paymethod price */
  price: number;
}