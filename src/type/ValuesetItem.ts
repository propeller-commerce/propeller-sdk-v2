import { LocalizedString } from './LocalizedString';
/**
 Object class for ValuesetItem
 */
export interface ValuesetItem {
  /** Valueset item primary identifier */
  id: number;
  /** Valueset foreign identifier */
  valuesetId: number;
  /** Valueset item value */
  value: string;
  /** descriptions field */
  descriptions: LocalizedString[];
  /** Valueset item extra value */
  extra?: string;
}