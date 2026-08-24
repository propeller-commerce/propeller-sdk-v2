import { BulkPriceFieldName } from '../enum/BulkPriceFieldName';
/**
 Input object for BulkPriceCsvMapping
 */
export interface BulkPriceCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: BulkPriceFieldName;
}