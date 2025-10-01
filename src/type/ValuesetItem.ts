import { LocalizedString } from './LocalizedString';
/**
 Object class for ValuesetItem
 */
export class ValuesetItem {
  /** Valueset item primary identifier */
  private _id: number;
  /** Valueset foreign identifier */
  private _valuesetId: number;
  /** Valueset item value */
  private _value: string;
  /** descriptions field */
  private _descriptions: LocalizedString[];
  /** Valueset item extra value */
  private _extra?: string;
  /**
   Creates a new instance of ValuesetItem
   */
  constructor(data: Partial<ValuesetItem> = {}) {
    this._id = data.id!;
    this._valuesetId = data.valuesetId!;
    this._value = data.value!;
    this._descriptions = data.descriptions!;
    this._extra = data.extra;
  }
  /**
   Valueset item primary identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   Valueset item primary identifier
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   Valueset foreign identifier
   */
  get valuesetId(): number {
    return this._valuesetId;
  }
  /**
   Valueset foreign identifier
   */
  set valuesetId(value: number) {
    this._valuesetId = value;
  }
  /**
   Valueset item value
   */
  get value(): string {
    return this._value;
  }
  /**
   Valueset item value
   */
  set value(value: string) {
    this._value = value;
  }
  /**
   descriptions field
   */
  get descriptions(): LocalizedString[] {
    return this._descriptions;
  }
  /**
   descriptions field
   */
  set descriptions(value: LocalizedString[]) {
    this._descriptions = value;
  }
  /**
   Valueset item extra value
   */
  get extra(): string | undefined {
    return this._extra;
  }
  /**
   Valueset item extra value
   */
  set extra(value: string | undefined) {
    this._extra = value;
  }
}