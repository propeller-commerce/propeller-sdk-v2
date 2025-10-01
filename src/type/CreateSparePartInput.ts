import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for CreateSparePartInput
 */
export interface CreateSparePartInput {
  /** Spare PartsMachine name */
  name?: LocalizedStringInput[];
  /** Quantity of spare parts */
  quantity: number;
  /** Spare part SKU */
  sku: string;
}