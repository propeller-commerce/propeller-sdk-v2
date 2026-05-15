import { TaxCode } from '../enum/TaxCode';
/**
 Object class for ZoneTaxCode
 */
export class ZoneTaxCode {
  /** Primary identifier */
  id!: string;
  /** Price foreign identifier */
  priceId!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Zone code */
  zone!: string;
  /** Tax code for the specified zone */
  taxCode!: TaxCode;
  constructor(data: Partial<ZoneTaxCode> = {}) {
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
  /** Returns `zone`. */
  getZone(): string {
    return this.zone;
  }
  /** Returns `taxCode`. */
  getTaxCode(): TaxCode {
    return this.taxCode;
  }
}