import { InventoryFieldName } from '../enum/InventoryFieldName';
/**
 Input object for InventoryCsvMapping
 */
export interface InventoryCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: InventoryFieldName;
}