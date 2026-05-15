/**
 Object class for TenderTaxLevel
 */
export class TenderTaxLevel {
  /** percentage field */
  percentage!: number;
  /** total field */
  total!: number;
  /** tax field */
  tax?: number;
  /** discount field */
  discount?: number;
  constructor(data: Partial<TenderTaxLevel> = {}) {
    Object.assign(this, data);
  }
}