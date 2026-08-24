import { ContactFieldName } from '../enum/ContactFieldName';
/**
 Input object for ContactCsvMapping
 */
export interface ContactCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: ContactFieldName;
}