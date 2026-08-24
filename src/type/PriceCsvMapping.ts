import { PriceFieldName } from '../enum/PriceFieldName';
/**
 Input object for PriceCsvMapping
 */
export interface PriceCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: PriceFieldName;
}