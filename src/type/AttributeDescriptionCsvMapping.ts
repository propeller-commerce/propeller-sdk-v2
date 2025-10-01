import { AttributeDescriptionFieldName } from '../enum/AttributeDescriptionFieldName';
/**
 Input object for AttributeDescriptionCsvMapping
 */
export interface AttributeDescriptionCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: AttributeDescriptionFieldName;
}