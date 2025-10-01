import { PricesheetFieldName } from '../enum/PricesheetFieldName';
/**
 Input object for PricesheetCsvMapping
 */
export interface PricesheetCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: PricesheetFieldName;
}