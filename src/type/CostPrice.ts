/**
 Object class for CostPrice
 */
export class CostPrice {
  /** Primary identifier */
  id!: string;
  /** Price foreign identifier */
  priceId!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Indicates the minimum quantity threshold needed to qualify for the cost price. */
  quantityFrom!: number;
  /** The cost associated to acquire the product. */
  value!: number;
  constructor(data: Partial<CostPrice> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `priceId`. */
  getPriceId(): string {
    return this.priceId;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `quantityFrom`. */
  getQuantityFrom(): number {
    return this.quantityFrom;
  }
  /** Returns `value`. */
  getValue(): number {
    return this.value;
  }
}