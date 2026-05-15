import { ValuesetType } from '../enum/ValuesetType';
import { LocalizedString } from './LocalizedString';
import { ValuesetItemResponse } from './ValuesetItemResponse';
/**
 Object class for Valueset
 */
export class Valueset {
  /** Valueset primary identifier */
  id!: number;
  /** Valueset name */
  name!: string;
  /** Valueset type */
  type!: ValuesetType;
  /** descriptions field */
  descriptions!: LocalizedString[];
  /** The userId of the user that changed the valueset */
  lastModifiedBy?: number;
  /** Valueset last modified date */
  lastModifiedAt!: string;
  /** The userId of the user that created the valueset */
  createdBy?: number;
  /** Valueset creation date */
  createdAt!: string;
  /** valuesetItems field */
  valuesetItems!: ValuesetItemResponse;
  constructor(data: Partial<Valueset> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `type`. */
  getType(): ValuesetType {
    return this.type;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `valuesetItems` as a ValuesetItemResponse instance (coerced on first access). */
  getValuesetItems(): ValuesetItemResponse | undefined {
    if (this.valuesetItems == null) return undefined;
    if (!(this.valuesetItems instanceof ValuesetItemResponse)) {
      this.valuesetItems = new ValuesetItemResponse(this.valuesetItems as any);
    }
    return this.valuesetItems;
  }
}