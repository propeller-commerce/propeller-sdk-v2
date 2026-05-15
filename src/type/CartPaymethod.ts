import { TaxCode } from '../enum/TaxCode';
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
  taxCode?: TaxCode;
  /** Paymethod price */
  price!: number;
  constructor(data: Partial<CartPaymethod> = {}) {
    Object.assign(this, data);
  }

  /** Returns `code`. */
  getCode(): string {
    return this.code;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `externalCode`. */
  getExternalCode(): string | undefined {
    return this.externalCode;
  }
  /** Returns `type`. */
  getType(): string | undefined {
    return this.type;
  }
  /** Returns `taxCode`. */
  getTaxCode(): TaxCode | undefined {
    return this.taxCode;
  }
  /** Returns `price`. */
  getPrice(): number {
    return this.price;
  }
}