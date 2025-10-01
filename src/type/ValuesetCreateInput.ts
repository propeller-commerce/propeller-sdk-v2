import { ValuesetType } from '../enum/ValuesetType';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ValuesetCreateInput
 */
export interface ValuesetCreateInput {
  /** Valueset unique name */
  name: string;
  /** Valueset descriptions per language */
  descriptions?: LocalizedStringInput[];
  /** The valueset type. SYSTEM types are only created by the system */
  type: ValuesetType;
}