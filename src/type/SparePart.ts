import { LocalizedString } from './LocalizedString';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for SparePart
 */
export class SparePart {
  /** Spare Part identifier */
  id!: string | number;
  /** Spare Part SKU */
  sku!: string;
  /** Spare Part quantity */
  quantity!: number;
  /** Spare Part name */
  name?: LocalizedString[];
  /** product field */
  product?: IBaseProduct;
  constructor(data: Partial<SparePart> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `sku`. */
  getSku(): string {
    return this.sku;
  }
  /** Returns `quantity`. */
  getQuantity(): number {
    return this.quantity;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.name;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `product`. */
  getProduct(): IBaseProduct | undefined {
    return this.product;
  }
}