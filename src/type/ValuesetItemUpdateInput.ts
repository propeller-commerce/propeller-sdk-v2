import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ValuesetItemUpdateInput
 */
export interface ValuesetItemUpdateInput {
  /** Valueset item unique value */
  value?: string;
  /** Valueset items descriptions per language */
  descriptions?: LocalizedStringInput[];
  /** Valueset item extra value */
  extra?: string;
}