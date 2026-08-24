import { CompanyFieldName } from '../enum/CompanyFieldName';
/**
 Input object for CompanyCsvMapping
 */
export interface CompanyCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: CompanyFieldName;
}