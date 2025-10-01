import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ValuesetItemCreateInput
 */
export interface ValuesetItemCreateInput {
  /** Valueset id */
  valuesetId: number;
  /** Valueset item unique value */
  value: string;
  /** Valueset items descriptions per language */
  descriptions?: LocalizedStringInput[];
  /** Valueset item extra value */
  extra?: string;
}