import { ClusterFieldName } from '../enum/ClusterFieldName';
/**
 Input object for ClusterCsvMapping
 */
export interface ClusterCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: ClusterFieldName;
}