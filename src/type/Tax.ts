import { TaxCode } from '../enum/TaxCode';
/**
 Object class for Tax
 */
export class Tax {
  /** Tax primary identifier */
  id!: string;
  /** Tax code */
  code?: TaxCode;
  /** Tax zone */
  zone!: string;
  /** Tax percentage  */
  percentage?: number;
  /** Tax export code */
  exportCode?: string;
  /** Tax initial creation timestamp */
  createdAt!: string;
  /** Reference to the user that created the tax initially */
  createdBy?: number;
  /** Tax last update timestamp */
  lastModifiedAt!: string;
  /** Reference to the user that last modified the tax */
  lastModifiedBy?: number;
  constructor(data: Partial<Tax> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `code`. */
  getCode(): TaxCode | undefined {
    return this.code;
  }
  /** Returns `zone`. */
  getZone(): string {
    return this.zone;
  }
  /** Returns `percentage`. */
  getPercentage(): number | undefined {
    return this.percentage;
  }
  /** Returns `exportCode`. */
  getExportCode(): string | undefined {
    return this.exportCode;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
}