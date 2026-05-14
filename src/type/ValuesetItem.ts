import { LocalizedString } from './LocalizedString';
/**
 Object class for ValuesetItem
 */
export class ValuesetItem {
  /** Valueset item primary identifier */
  id!: number;
  /** Valueset foreign identifier */
  valuesetId!: number;
  /** Valueset item value */
  value!: string;
  /** descriptions field */
  descriptions!: LocalizedString[];
  /** Valueset item extra value */
  extra?: string;
  constructor(data: Partial<ValuesetItem> = {}) {
    Object.assign(this, data);
  }
}