import { Taxcode } from '../enum/Taxcode';
/**
 Object class for CartPaymethod
 */
export class CartPaymethod {
  /** Paymethod code */
  code!: string;
  /** Paymethod name */
  name!: string;
  /** External code */
  externalCode?: string;
  /** Paymethod type */
  type?: string;
  /** Tax code */
  taxCode?: Taxcode;
  /** Paymethod price */
  price!: number;
  constructor(data: Partial<CartPaymethod> = {}) {
    Object.assign(this, data);
  }
}