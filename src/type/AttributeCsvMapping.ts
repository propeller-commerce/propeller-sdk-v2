import { AttributeFieldName } from '../enum/AttributeFieldName';
/**
 Input object for AttributeCsvMapping
 */
export interface AttributeCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: AttributeFieldName;
}