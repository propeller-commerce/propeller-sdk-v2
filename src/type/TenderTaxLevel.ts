/**
 Object class for TenderTaxLevel
 */
export interface TenderTaxLevel {
  /** percentage field */
  percentage: number;
  /** total field */
  total: number;
  /** tax field */
  tax?: number;
  /** discount field */
  discount?: number;
}