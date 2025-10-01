import { BulkCostPriceFieldName } from '../enum/BulkCostPriceFieldName';
/**
 Input object for BulkCostPriceCsvMapping
 */
export interface BulkCostPriceCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: BulkCostPriceFieldName;
}