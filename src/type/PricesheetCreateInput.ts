import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for PricesheetCreateInput
 */
export interface PricesheetCreateInput {
  /** Pricesheet code. */
  code: string;
  /** Pricesheet name. */
  names?: LocalizedStringInput[];
  /** Pricesheet description. */
  descriptions?: LocalizedStringInput[];
  /** Pricesheet priority. */
  priority: number;
  /** Pricesheet readonly. */
  readonly: boolean;
}