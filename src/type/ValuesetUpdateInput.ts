import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ValuesetUpdateInput
 */
export interface ValuesetUpdateInput {
  /** Valueset unique name */
  name?: string;
  /** Valueset descriptions per language */
  descriptions?: LocalizedStringInput[];
}