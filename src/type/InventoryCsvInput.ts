import { InventoryCsvMapping } from './InventoryCsvMapping';
/**
 Input object for InventoryCsvInput
 */
export interface InventoryCsvInput {
  /** CSV file */
  file: File;
  /** A list of inventories CSV field mappings */
  mappings?: InventoryCsvMapping[];
}