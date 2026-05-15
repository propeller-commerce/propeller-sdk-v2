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

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `valuesetId`. */
  getValuesetId(): number {
    return this.valuesetId;
  }
  /** Returns `value`. */
  getValue(): string {
    return this.value;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `extra`. */
  getExtra(): string | undefined {
    return this.extra;
  }
}