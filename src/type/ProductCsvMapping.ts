import { ProductFieldName } from '../enum/ProductFieldName';
/**
 Input object for ProductCsvMapping
 */
export interface ProductCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: ProductFieldName;
}