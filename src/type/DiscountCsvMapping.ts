import { DiscountFieldName } from '../enum/DiscountFieldName';
/**
 Input object for DiscountCsvMapping
 */
export interface DiscountCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: DiscountFieldName;
}