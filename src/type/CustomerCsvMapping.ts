import { CustomerFieldName } from '../enum/CustomerFieldName';
/**
 Input object for CustomerCsvMapping
 */
export interface CustomerCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: CustomerFieldName;
}