import { DocumentFieldName } from '../enum/DocumentFieldName';
/**
 Input object for DocumentCsvMapping
 */
export interface DocumentCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: DocumentFieldName;
}