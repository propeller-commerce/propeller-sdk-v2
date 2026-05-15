/**
 Object class for BulkCostPrice
 */
export class BulkCostPrice {
  /** Primary identifier */
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type. */
  value!: number;
  /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
  quantityFrom!: number;
  /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
  validFrom?: string;
  /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
  validTo?: string;
  /** price foreign identifier */
  priceId!: string;
  constructor(data: Partial<BulkCostPrice> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `value`. */
  getValue(): number {
    return this.value;
  }
  /** Returns `quantityFrom`. */
  getQuantityFrom(): number {
    return this.quantityFrom;
  }
  /** Returns `validFrom`. */
  getValidFrom(): string | undefined {
    return this.validFrom;
  }
  /** Returns `validTo`. */
  getValidTo(): string | undefined {
    return this.validTo;
  }
  /** Returns `priceId`. */
  getPriceId(): string {
    return this.priceId;
  }
}