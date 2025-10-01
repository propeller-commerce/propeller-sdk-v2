import { CategoryFieldName } from '../enum/CategoryFieldName';
/**
 Input object for CategoryCsvMapping
 */
export interface CategoryCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: CategoryFieldName;
}